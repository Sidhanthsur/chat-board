
import './FormTextButton.css'
interface ButtonProps {
    question?: string;
    title: string;
    className?: string;
    onButtonClick: () => void;
}
const FormButton = ({ title, className, onButtonClick, question }: ButtonProps) => {
    return (
        <button onClick={onButtonClick} className={`form-text-button ${className || ''}`}>
            {question && <span className='form-text-button__question'>{question} </span>}
            <span className='form-text-button__title'>{title}</span>
        </button>
    )
}

export default FormButton;