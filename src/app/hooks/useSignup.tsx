import { useState } from "react"

const useLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    return {
        email,
        password,
        setEmail,
        setPassword,
        username,
        setUsername
    }
}

export default useLogin