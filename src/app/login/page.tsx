"use client";

import './login.css'
import Image from 'next/image'
import useLogin from '../hooks/useLogin'
import LoginForm from '../components/LoginForm';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import useSignup from '../hooks/useSignup'
import Modal from '../components/Modal'
import SignupForm from '../components/SignupForm'

const Login = () => {
    const router = useRouter()
    const [isSignupModalVisible, setIsSignupModalVisible] = useState(false)
    const { email: newEmail, password: newPassword, username,
        setEmail: setNewEmail, setPassword: setNewPassword, setUsername } = useSignup()

    const {
        password,
        email,
        setEmail,
        setPassword
    } = useLogin()
    return (
        <div className="login-container">

            {
                isSignupModalVisible && (
                    <Modal>
                        <SignupForm
                            onTextButtonClicked={() => {
                                setIsSignupModalVisible(false)
                            }}
                            username={username}
                            email={newEmail}
                            password={newPassword}
                            setUserName={setUsername}
                            setEmail={setNewEmail}
                            setPassword={setNewPassword}
                            onClose={() => setIsSignupModalVisible(false)}
                            onSignupClicked={() => router.push('/dashboard')} />
                    </Modal>
                )
            }

            <Image
                width={40}
                height={40}
                alt="logo"
                src="/logo.png"
                className='mb-8' />

            <LoginForm
                onTextButtonClicked={() => setIsSignupModalVisible(true)}
                onLoginClicked={() => router.push('/dashboard')} email={email} password={password} setPassword={setPassword} setEmail={setEmail} />

        </div>
    )
}



export default Login