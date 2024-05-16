import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login(){
    const [logname, setLogName] = useState("");
    const [logpassword, setLogPassword] = useState("");

    const navigate = useNavigate();

    const hendelLogin = (e) => {
        e.preventDefault();
        
        const username = localStorage.getItem('name');
        const userpassword = localStorage.getItem('password');

        if(logname === username && logpassword === userpassword){
            // alert("login succesfully");
            toast.success("Login succesfully");
            navigate('/');
        }
        else{
            // alert("Invalid Username and Password");
            toast.error("Invalid Username and Password");
        }

    }

    return <div>
        <h2>Login</h2>

        <form onSubmit={hendelLogin}>
            <input type="text" value={logname} onChange={(e)=>setLogName(e.target.value)} placeholder="Enter Name"/><br /><br />

            <input value={logpassword} onChange={(e)=>setLogPassword(e.target.value)} type="text" placeholder="Enter Password" /><br /><br />

            <button type="submit">Login</button>
            <ToastContainer/>
        </form>

    </div>
}

export default Login;