import './styles/Post.css'
import { Post } from '../types/Post'

export default function Post({ profileImage, author }: Post) {
    return (
        <div>
            {author}
        </div>
    )
}