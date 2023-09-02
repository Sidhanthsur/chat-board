import './styles/DashboardBox.css'

type Props = {
    children: JSX.Element;
    className?: string;
}

export default function DashboardBox({ children, className }: Props) {
    return (
        <div className={`dashboard-box p-6 ${className || ''}`}>
            {children}
        </div>
    )

}