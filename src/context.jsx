import { createContext, useContext, useReducer } from "react";
import { getUserInitialData, userReducer } from "./reducers/User";

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [userState, userDispatch] = useReducer(userReducer, getUserInitialData())    

    return <AppContext.Provider value={{ userState, userDispatch }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)