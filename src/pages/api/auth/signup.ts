import { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from '../../../../lib/auth';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return;

    const { email, password, username, profilePic } = req.body
    if (!email || !email.includes('@') || !password || password.trim().length < 6) {
        return res.status(422).json({
            message: 'Invalid input - make sure password is more than 5 characters'
        })
    }
    const existingUser = await prisma.users.findUnique({
        where: { email: email}
    })
    if (existingUser) return res.status(422).json({
        message: 'User already exists with that email'
    })
    const hashedPassword: string = await hashPassword(password)
    const result = await prisma.users.create({
        data: {
            username: username,
            hashed_password: hashedPassword,
            email: email,
            profile_pic: profilePic
        }
    })
    return res.status(201).json({
        result
    })
}
