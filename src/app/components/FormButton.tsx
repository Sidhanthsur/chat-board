
import './FormButton.css'
interface ButtonProps {
    title: string;
    className?: string;
    onButtonClick: () => void;
}
const FormButton = ({ title, className, onButtonClick }: ButtonProps) => {
    return (
        <button onClick={onButtonClick} className={`form-button py-3 ${className || ''}`}>
            <span className='form-button__title'>{title}</span>
        </button>
    )
}

export default FormButton;