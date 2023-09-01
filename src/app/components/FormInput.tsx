import './FormInput.css'

interface FormProps {
    value: string;
    setValue: (value: string) => void;
    placeholder: string;
    type?: string;
    className?: string
}

const FormInput = ({ value, setValue, type = 'text', placeholder, className }: FormProps) => {

    return (
        <div className={`form-input ${className || ''}`}>
            <div className='form-input__placeholder'>{placeholder}</div>
            <input className="form-input__input" value={value} type={type} onChange={e => setValue(e.target.value)} />
        </div>
    )
}

export default FormInput