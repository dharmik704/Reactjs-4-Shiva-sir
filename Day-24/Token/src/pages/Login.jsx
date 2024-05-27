import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IsAuthcontext } from "../../Contextprovider/Isauthcontextprovider"

function Login(){
    const [logemail, setLogemail] = useState("");
    const [logpassword, setLogPassword] = useState("");

    const { Login } = useContext(IsAuthcontext);

    const navigate = useNavigate();

    const hendelLogin = (e) => {
        e.preventDefault();
        
        fetch(`https://reqres.in/api/login`,{
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: logemail,
                password: logpassword
            })
        })
        .then((res)=>res.json())
        .then((data) => {
            console.log(data);
            Login(data.token);
            alert('login successful');
            if(data.token){
                navigate('/');
            }
        })
        .catch((err)=> {
            console.error(err);
        })

    }

    return <div>
        <h2>Login</h2>

        <form onSubmit={hendelLogin}>
            <input type="email" value={logemail} onChange={(e)=>setLogemail(e.target.value)} placeholder="Enter Email"/><br /><br />

            <input value={logpassword} onChange={(e)=>setLogPassword(e.target.value)} type="text" placeholder="Enter Password" /><br /><br />

            <button type="submit">Login</button>
            <ToastContainer/>
        </form>

    </div>
}

export default Login;