export const initialUserData = {
    username: null,
    isLoggedIn: false,
    loginTime: null
}

export const getUserInitialData = () => {
    const userData = JSON.parse(localStorage.getItem('userData'))

    return userData ? userData : initialUserData
}

export const userReducer = (state, action) => {
    switch(action.type){
        case "SET_USERNAME":
            return {...state, username: action.payload}
        case "SET_IS_LOGGED_IN":
            return {...state, isLoggedIn: action.payload}
        case "SET_LOGIN_TIME":
            return {...state, loginTime: action.payload}
        case "REMOVE_USER_FROM_LS":
            return {state: initialUserData}
        default:
            return state
    }
}