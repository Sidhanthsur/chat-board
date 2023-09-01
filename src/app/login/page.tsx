import './login.css'
import Image from 'next/image'
const Login = () => {
    return (
        <div className="">
            <Image
                width={40}
                height={40}
                alt="logo"
                src="/logo.png" />

            <div className='login-container__box'>
                <div className='login-container__box-title '>
                    Welcome Back
                </div>
            </div>
        </div>
    )
}



export default Login