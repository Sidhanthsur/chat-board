'use client'
import './Dashboard.css'
import useDashboard from './useDashboard'
import Post from '../components/Post'
import DashboardBox from '../components/DashboardBox'
import FormButton from '../components/FormButton'
import { useState } from 'react'
import Modal from '../components/Modal'
import LoginForm from '../components/LoginForm'
import useLogin from '../login/useLogin'


export default function Dashboard() {
    const { posts } = useDashboard()
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(true)
    const { email, setEmail, setPassword, password } = useLogin()
    return (
        <div className="dashboard">
            {
                isLoginModalVisible && (
                    <Modal>
                        <LoginForm onLoggedIn={() => setIsLoginModalVisible(false)} email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
                    </Modal>
                )
            }
            <div className='dashboard__name'>Hello Jane</div>
            <div className='dashboard__sub-title pt-3'>How are you doing today? Would you like to share something with the community 🤗</div>

            <DashboardBox className='mb-4 mt-10'>
                <div>
                    <span className='dashboard__new-post-title'>Create Post</span>

                    <FormButton
                        title="Post"
                        className='float-right'
                        variant='small'
                        onButtonClick={() => console.log('click')} />
                </div>
            </DashboardBox>
            <div>
                {
                    posts.map((post) => (
                        <DashboardBox key={post.id} className='mb-4'>
                            <Post {...post} />
                        </DashboardBox>

                    ))
                }
            </div>

        </div>
    )
}