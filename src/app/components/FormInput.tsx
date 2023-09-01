import { useState } from 'react';
import './FormInput.css'
import Image from 'next/image'

interface FormProps {
    value: string;
    setValue: (value: string) => void;
    placeholder: string;
    type?: string;
    className?: string
}

const FormInput = ({ value, setValue, type = 'text', placeholder, className }: FormProps) => {

    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false);
    const isTypePassword = type === 'password'


    return (
        <div className={`form-input ${className || ''}`}>
            <div className='form-input__placeholder'>{placeholder}</div>
            <div className={`form-input__input_box
            ${isFocused ? 'form-input__input_box--focus' : ''}
             ${isTypePassword ? 'form-input__input_box--password' : ''}`}>
                <input onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)} className="form-input__input" value={value} type={showPassword ? 'text' : type} onChange={e => setValue(e.target.value)} />
                {
                    isTypePassword && <Image
                        onClick={() => setShowPassword(e => !e)}
                        width={24} height={24} src="/eye.svg" alt="eye" className='mr-2 cursor-pointer' />
                }
            </div>
        </div>
    )
}

export default FormInput