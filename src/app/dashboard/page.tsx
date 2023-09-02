'use client'
import './Dashboard.css'
import useDashboard from './useDashboard'
import Post from '../components/Post'
import DashboardBox from '../components/DashboardBox'
import FormButton from '../components/FormButton'


export default function Dashboard() {
    const { posts } = useDashboard()
    return (
        <div className="dashboard">
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