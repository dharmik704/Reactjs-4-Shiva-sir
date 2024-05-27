import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { IsAuthcontext } from "../../Contextprovider/Isauthcontextprovider"


function Privateroutes({ children }){

    const { isAuth } = useContext(IsAuthcontext);

    if(!isAuth){
        return <Navigate to='/login'/>
    }

    return <div>
        {children}
    </div>
}

export default Privateroutes;