'use client'
import './Dashboard.css'
import useDashboard from '../hooks/useDashboard'
import Post from '../components/Post'
import DashboardBox from '../components/DashboardBox'
import FormButton from '../components/FormButton'
import { useState } from 'react'
import Modal from '../components/Modal'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import useLogin from '../hooks/useLogin'
import useSignup from '../hooks/useSignup'



export default function Dashboard() {
    const { posts } = useDashboard()
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
    const [isSignupModalVisible, setIsSignupModalVisible] = useState(false)
    const { email, setEmail, setPassword, password } = useLogin()
    const { email: newEmail, password: newPassword, username,
        setEmail: setNewEmail, setPassword: setNewPassword, setUsername } = useSignup()
    const [newPost, setNewPost] = useState('')

    const closeAllModals = () => {
        setIsLoginModalVisible(false)
        setIsSignupModalVisible(false)
    }
    return (
        <div className="dashboard">
            {
                isLoginModalVisible && (
                    <Modal>
                        <LoginForm
                            isModal
                            onModalClose={closeAllModals}
                            onTextButtonClicked={() => {
                                setIsSignupModalVisible(true)
                                setIsLoginModalVisible(false)
                            }} onLoginClicked={() => setIsLoginModalVisible(false)} email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
                    </Modal>
                )
            }
            {
                isSignupModalVisible && (
                    <Modal>
                        <SignupForm
                            onTextButtonClicked={() => {
                                setIsSignupModalVisible(false)
                                setIsLoginModalVisible(true)
                            }}
                            username={username}
                            email={newEmail}
                            password={newPassword}
                            setUserName={setUsername}
                            setEmail={setNewEmail}
                            setPassword={setNewPassword}
                            onClose={closeAllModals}
                            onSignupClicked={closeAllModals} />
                    </Modal>
                )
            }
            <div className='dashboard__name'>Hello Jane</div>
            <div className='dashboard__sub-title pt-3'>How are you doing today? Would you like to share something with the community 🤗</div>

            <DashboardBox className='mb-4 mt-10'>
                <div>
                    <span className='dashboard__new-post-title'>Create Post</span>

                    <div className='dashboard-box__new-post'>
                        <div className='dashboard-box__new-post-emoticon'>
                            🏝️
                        </div>
                        <textarea className='dashboard-box__new-post-description' onChange={(e) => setNewPost(e.target.value)} value={newPost} />
                    </div>

                    <FormButton
                        title="Post"
                        className='float-right mt-2'
                        variant='small'
                        onButtonClick={() => setIsLoginModalVisible(true)} />
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