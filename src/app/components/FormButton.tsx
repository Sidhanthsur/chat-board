
import './styles/FormButton.css'
interface ButtonProps {
    title: string;
    variant?: string;
    isDisabled?: boolean;
    className?: string;
    onButtonClick: () => void;
}
const FormButton = ({ title, className, onButtonClick, variant = 'normal', isDisabled = false }: ButtonProps) => {

    const isSmallVariant = variant === 'small'
    return (
        <button
            disabled={isDisabled}
            onClick={onButtonClick}
            className={`form-button py-3 ${className || ''} 
            ${isSmallVariant ? 'form-button--small' : ''} 
            ${isDisabled ? 'form-button--disabled' : ''}`}>
            <span className='form-button__title'>{title}</span>
        </button>
    )
}

export default FormButton;