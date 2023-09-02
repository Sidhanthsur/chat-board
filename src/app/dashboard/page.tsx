'use client'
import './Dashboard.css'
import useDashboard from './useDashboard'


export default function Dashboard() {
    const { posts } = useDashboard()
    return (
        <div className="dashboard">
            <div className='dashboard__name'>Hello Jane</div>
            <div className='dashboard__sub-title pt-3'>How are you doing today? Would you like to share something with the community 🤗</div>

        </div>
    )
}