import { useSession, signOut } from 'next-auth/react';
import LogInModal from './logInModal';
import d20 from '../../public/images/d20.png'
import Image from 'next/image';


export default function Header() {
    const { data: session, status: loading } = useSession();
    return (
        <div className='flex flex-row justify-around' id='header-container'>

        <div>
            <Image src={d20} alt='d20 logo' className='w-20 object-cover' />
            <h1>Side Quest</h1>
        </div>
        {!session && !loading ? (
            <LogInModal />
        ) : session ? (
            <button className='btn' onClick={() => signOut()}>Logout</button>
        ) : null}
        </div>
    )
}
