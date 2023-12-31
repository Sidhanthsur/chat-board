import FormInput from './FormInput'
import FormButton from './FormButton';
import FormTextButton from './FormTextButton';
import './styles/SignupForm.css'
import Image from 'next/image'
import { useEffect } from 'react';

type SignupFormProps = {
    email: string;
    password: string;
    username: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setUserName: (username: string) => void;
    onSignupClicked: () => void;
    onClose: () => void;
    onTextButtonClicked: () => void;
}

export default function SignupForm({ email, setEmail, password, setPassword, onSignupClicked, username, setUserName, onClose
    , onTextButtonClicked }: SignupFormProps) {

    useEffect(() => {
        return () => {
            setEmail('')
            setPassword('')
            setUserName('')
        }
    }, [])

    const isButtonDisabled = !email || !password || !username


    return (

        <div className='signup-form'>
            <Image
                onClick={onClose}
                width={24}
                height={24}
                src="/close.png"
                alt="close"
                className='cursor-pointer signup-form__close' />
            <div className='signup-form__title mb-1'>
                Sign up
            </div>
            <div className='signup-form__subtitle'>
                Create an account to continue
            </div>


            <div className='mx-4 w-full'>
                <FormInput
                    value={email}
                    setValue={setEmail}
                    placeholder='Email'
                    hint='Enter your email' />

                <FormInput
                    className='mt-4'
                    value={username}
                    setValue={setUserName}
                    placeholder='Username'
                    hint='Choose a preferred username' />

                <FormInput value={password} setValue={setPassword} type='password' placeholder='Password'
                    className='mt-4'
                    rightText='Forgot Password ?'
                    hint='Enter your password'
                    onRightTextClick={() => console.log('clicked')} />

                <FormButton isDisabled={isButtonDisabled} onButtonClick={onSignupClicked} title='Continue' className='mt-5' />
                <FormTextButton question='Already have an account?' onButtonClick={onTextButtonClicked} title='Login →' className='mt-3' />
            </div>
        </div>
    )
}