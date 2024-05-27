import { Navigate } from "react-router-dom";


function Privateroutes({ children }){

    let isAuth = false;

    if(!isAuth){
        return <Navigate to='/login'/>
    }

    return <div>
        {children}
    </div>
}

export default Privateroutes;