import './styles/Post.css'
import { Post } from '../types/Post'
import Image from 'next/image'

export default function Post({ profileImage, author, time }: Post) {
    return (
        <div className='post p-6'>

            <div className='flex justify-between'>
                <div className='flex'>
                    {/** Author details */}
                    <Image
                        src={profileImage}
                        alt={author}
                        width={45}
                        height={45}
                        className='post__profile'
                    />
                    <div className='ml-4'>
                        <div className='post__author-name'>{author}</div>
                        <div className='post__time'>{time}</div>
                    </div>


                </div>

                <Image
                    width={20}
                    height={20}
                    alt="dots"
                    src="/dots.svg" />
            </div>



        </div>
    )
}