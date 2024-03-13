import { useGlobalContext } from "../context"

const LandingPage = () => {
    const { userState } = useGlobalContext()

    return (
        <div>
            {userState.isLoggedIn ?
                (<h2>Here is where some AWESOME CONTENT will be displayed</h2>)
                :
                (<h2>Please log in to see the most AWESOME CONTENT available on the web</h2>)
            }
        </div>
    )
}

export default LandingPage