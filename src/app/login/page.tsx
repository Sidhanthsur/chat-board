"use client";
import FormInput from '../components/FormInput'
import './login.css'
import Image from 'next/image'
import useLogin from './useLogin'
import FormButton from '../components/FormButton';
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

            <div className='login-container__box'>
                <div className='login-container__box-title mb-1'>
                    Welcome Back
                </div>
                <div className='login-container__box-subtitle'>
                    Log into your account
                </div>


                <div className='mx-4 w-full'>
                    <FormInput
                        value={email}
                        setValue={setEmail}
                        placeholder='Email or username'
                        hint='Enter your email or username' />

                    <FormInput value={password} setValue={setPassword} type='password' placeholder='Password'
                        className='mt-4'
                        rightText='Forgot Password ?'
                        hint='Enter your password'
                        onRightTextClick={() => console.log('clicked')} />

                    <FormButton onButtonClick={() => console.log('clicked')} title='Login now' className='mt-5' />
                </div>
            </div>
        </div>
    )
}



export default Login