import { useState } from "react";
import { useNavigate } from "react-router-dom"

function Signup(){

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const hendelSignup = (e) => {
        e.preventDefault();

        localStorage.setItem('name', name);
        localStorage.setItem('password', password);

        setName("");
        setPassword("");
        navigate('/login');
    }

    return <div>
        <h2>Signup</h2>

        <form onSubmit={hendelSignup}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/><br /><br />

            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Enter Password" /><br /><br />

            <button type="submit">SignUp</button>
        </form>

    </div>
}

export default Signup;

