import './login.css'
import Image from 'next/image'
const Login = () => {
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
            </div>
        </div>
    )
}



export default Login