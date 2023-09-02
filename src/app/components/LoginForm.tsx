import FormInput from './FormInput'
import FormButton from './FormButton';
import FormTextButton from './FormTextButton';
import './styles/LoginForm.css'
import Image from 'next/image'
import { useEffect } from 'react';

interface LoginFormProps {
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    onLoginClicked: () => void;
    onTextButtonClicked: () => void;
    isModal?: boolean;
    onModalClose?: () => void;
}

export default function LoginForm({ email, setEmail, password, setPassword, onLoginClicked, onTextButtonClicked, isModal = false, onModalClose }: LoginFormProps) {

    useEffect(() => {
        return () => {
            setEmail('')
            setPassword('')
        }
    }, [])

    const isButtonDisabled = !email || !password
    return (

        <div className='login-form'>

            {
                isModal && <Image
                    onClick={onModalClose}
                    width={24}
                    height={24}
                    src="/close.png"
                    alt="close"
                    className='cursor-pointer login-form__close' />
            }
            <div className='login-form__title mb-1'>
                Welcome Back
            </div>
            <div className='login-form__subtitle'>
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

                <FormButton isDisabled={isButtonDisabled} onButtonClick={onLoginClicked} title='Login now' className='mt-5' />
                <FormTextButton question='Not registered yet?' onButtonClick={onTextButtonClicked} title='Register →' className='mt-3' />
            </div>
        </div>
    )
}