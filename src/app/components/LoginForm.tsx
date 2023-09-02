import FormInput from './FormInput'
import FormButton from './FormButton';
import FormTextButton from './FormTextButton';
import './styles/LoginForm.css'

interface LoginFormProps {
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    onLoggedIn: () => void;
}

export default function LoginForm({ email, setEmail, password, setPassword, onLoggedIn }: LoginFormProps) {

    const isButtonDisabled = !email || !password
    return (

        <div className='login-form'>
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

                <FormButton isDisabled={isButtonDisabled} onButtonClick={onLoggedIn} title='Login now' className='mt-5' />
                <FormTextButton question='Not registered yet?' onButtonClick={() => console.log('clicked')} title='Register →' className='mt-3' />
            </div>
        </div>
    )
}