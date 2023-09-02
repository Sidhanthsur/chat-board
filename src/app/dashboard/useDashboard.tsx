import { useState } from "react";

const temporaryPosts = [
    {
        profileImage: 'https://robohash.org/e285b96a1c5974dbf6d94018051838f0?set=set4&bgset=&size=100x100',
        author: 'Theresa Webb',
        time: '5 mins ago',
        post: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        emoticon: "🚀",
        id: 1
    },
    {
        profileImage: 'https://robohash.org/e285b96a1c5974dbf6d94018051838f0?set=set4&bgset=&size=100x100',
        author: 'Theresa Webb',
        time: '5 mins ago',
        post: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        emoticon: "🚀",
        id: 2
    }
]

const useDashboard = () => {
    const [posts, setPosts] = useState([temporaryPosts])
    return {
        posts
    }
}

export default useDashboard;