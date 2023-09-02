"use client";

import './login.css'
import Image from 'next/image'
import useLogin from './useLogin'
import LoginForm from '../components/LoginForm';

const Login = () => {

    const {
        password,
        email,
        setEmail,
        setPassword
    } = useLogin()
    return (
        <div className="login-container">
            <Image
                width={40}
                height={40}
                alt="logo"
                src="/logo.png"
                className='mb-8' />

            <LoginForm email={email} password={password} setPassword={setPassword} setEmail={setEmail} />

        </div>
    )
}



export default Login