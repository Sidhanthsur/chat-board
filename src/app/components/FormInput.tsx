import { useState } from 'react';
import './styles/FormInput.css'
import Image from 'next/image'

interface FormProps {
    value: string;
    placeholder: string;
    hint: string;
    type?: string;
    className?: string;
    rightText?: string;
    onRightTextClick?: () => void;
    setValue: (value: string) => void;
}

const FormInput = ({ value, setValue, type = 'text', placeholder, className, rightText, onRightTextClick, hint }: FormProps) => {

    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false);
    const isTypePassword = type === 'password'


    return (
        <div className={`form-input ${className || ''}`}>
            <div className='flex justify-between'>
                <div className='form-input__placeholder'>{placeholder}</div>
                <div className='form-input__placeholder cursor-pointer' onClick={onRightTextClick}>{rightText}</div>
            </div>
            <div className={`p-3 form-input__input_box
            ${isFocused ? 'form-input__input_box--focus' : ''}
             ${isTypePassword ? 'form-input__input_box--password' : ''}`}>
                <input placeholder={hint} onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)} className="form-input__input" value={value} type={showPassword ? 'text' : type} onChange={e => setValue(e.target.value)} />
                {
                    isTypePassword &&
                    <Image
                        onClick={() => setShowPassword(e => !e)}
                        width={24}
                        height={24}
                        src="/eye.svg"
                        alt="eye"
                        className='cursor-pointer' />
                }
            </div>
        </div>
    )
}

export default FormInput