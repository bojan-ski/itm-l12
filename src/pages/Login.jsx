import { useEffect, useReducer, useState } from 'react'
import users from '../data/users.json'
import { getUserInitialData, userReducer } from '../reducers/User'
// console.log(users);

const Login = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [pageMessage, setPageMessage] = useState(null)
    const [userState, userDispatch] = useReducer(userReducer, getUserInitialData())
    // console.log(userState);

    const checkCredentials = () => {
        if (username === null || password === null || username.trim() === '' || password.trim() === '') {
            setPageMessage('You have entered the wrong login credentials')
            return
        }
        // console.log(username, password);

        let foundUser = false

        users.forEach((user, idx) => {
            // console.log(user, idx);
            if (user.username === username && user.password === password) {
                // console.log(`Hello ${username}`);

                foundUser = true
                setPageMessage('Successfully logged in')

                setInterval(() => {
                    setPageMessage(null)
                }, 3000)

                userDispatch({ type: "SET_USERNAME", payload: username })
                userDispatch({ type: "SET_IS_LOGGED_IN", payload: true })
                userDispatch({ type: "SET_LOGIN_TIME", payload: new Date().getTime() })
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
            {!userState.isLoggedIn && (
                <form>
                    <p>
                        {pageMessage}
                    </p>
                    <input placeholder='please enter your username' type="text" onInput={e => setUsername(e.target.value)} />
                    <input placeholder='please enter password' type="password" onInput={e => setPassword(e.target.value)} />
                    <button type='button' onClick={checkCredentials}>
                        Log In
                    </button>
                </form>
            )}
        </>
    )
}

export default Login