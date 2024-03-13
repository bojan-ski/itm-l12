import { useEffect, useState } from 'react'
import users from '../data/users.json'
import { useGlobalContext } from '../context'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const { userState, userDispatch } = useGlobalContext()
    const navigate = useNavigate()

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [pageMessage, setPageMessage] = useState(null)

    const checkCredentials = () => {
        if (username === null || password === null || username.trim() === '' || password.trim() === '') {
            setPageMessage('You have entered the wrong login credentials')
            return
        }

        let foundUser = false

        users.forEach(user => {
            if (user.username === username && user.password === password) {
                foundUser = true

                userDispatch({ type: "SET_USERNAME", payload: username })
                userDispatch({ type: "SET_IS_LOGGED_IN", payload: true })
                userDispatch({ type: "SET_LOGIN_TIME", payload: new Date().getTime() })

                setPageMessage('You have successfully logged in')

                setTimeout(() => {
                    setPageMessage(null)
                    navigate('/')
                }, 2000)
            }
        })

        if (!foundUser) {
            setPageMessage('User with provide credentials does not exist!')
        }
    }

    useEffect(() => {
        if (userState.isLoggedIn) {
            localStorage.setItem('userData', JSON.stringify(userState))
        }
    }, [userState])

    return (
        <>
            {!userState.isLoggedIn ? (
                <form>
                    <p>
                        {pageMessage}
                    </p>
                    <input placeholder='please enter your username' type="text" onInput={e => setUsername(e.target.value)} />
                    <input placeholder='please enter password' type="password" onInput={e => setPassword(e.target.value)} />
                    <button type='button' onClick={checkCredentials}>
                        Submit
                    </button>
                </form>
            )
                :
                <p>
                    {pageMessage}
                </p>
            }
        </>
    )
}

export default Login