import { useContext } from "react";
import Login from "./Login";
import { IsAuthcontext } from "../../Contextprovider/Isauthcontextprovider";


function Home(){

    const { Logout } = useContext(IsAuthcontext);

    return <div>
        <h1>Home</h1>
        <button onClick={Logout}>Logout</button>
    </div>
}

export default Home;