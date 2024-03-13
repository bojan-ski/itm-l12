import { NavLink, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Navbar = () => {
    const { userState, userDispatch } = useGlobalContext()
    const navigate = useNavigate()

    const handleAction = () =>{
        localStorage.removeItem('userData')
        userDispatch({ type: "REMOVE_USER_FROM_LS" })
        navigate('/')
    }

    return (
        <nav>
            {userState.isLoggedIn ?
                (<NavLink to="/" onClick={handleAction}>Log Out</NavLink>)
                :
                (<NavLink to="/login">Log In</NavLink>)
            }
        </nav>
    )
}

export default Navbar