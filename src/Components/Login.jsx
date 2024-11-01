import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'


function Login() {

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <h2>Login</h2>

            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username' />
<br />
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />
<br />
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default Login
