import { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from '../../../../lib/auth';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return;

    const { email, password, username, profilePic } = req.body
    if (!email || !email.includes('@') || !password || password.trim().length < 6) {
        return res.status(422).json({
            message: 'Invalid input - make sure password is at least 6 characters and/or be sure to include a valid email address'
        })
    }
    const existingEmail = await prisma.users.findUnique({
        where: { email: email }
    })
    const existingUsername = await prisma.users.findUnique({
        where: { username: username }
    })
    if (existingEmail) return res.status(422).json({
        message: 'User already exists with that email'
    })
    if (existingUsername) return res.status(422).json({
        message: 'User already exists with that username'
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
