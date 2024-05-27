import { createContext, useContext, useState } from "react";


export const IsAuthcontext = createContext();

function Isauthcontextprovider({children}){

    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);

    const Login = (token) => {
        setIsAuth(true);
        setToken(token);
    }

    const Logout = () => {
        setIsAuth(false);
        setToken(null);
    }

    return <div>
        <IsAuthcontext.Provider value={{Login, Logout, isAuth}}>
            {children}
        </IsAuthcontext.Provider>
    </div>

}

export default Isauthcontextprovider;