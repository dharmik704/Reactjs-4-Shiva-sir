import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [error, setError] = useState({});

    const hendalSubmit = (e) => {
        e.preventDefault();

        const error = {};

        if(!name.trim()){
            error.name = 'Name is Required'
            // toast.error('Name is Required');
        }
        if(!email.trim()){
            error.email = 'Email is Required'
            // toast.error('Email is Required');
        }
        if(!password.trim()){
            error.password = 'Password is Required'
            // toast.error('Password is Required');
        }
        else if(password.length < 6){
            error.password = 'Password at list 6 character'
            // toast.error('Password at list 6 Character');
        }

        if(Object.keys(error).length > 0){
            setError(error);
        }
        console.log(error);
    }

    return <div>
        
        <form onSubmit={hendalSubmit}>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
                {error.name && <span style={{color:'red'}}>{error.name}</span>}
            </div>
            <div>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
                {error.email && <span style={{color:'red'}}>{error.email}</span>}
            </div>
            <div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
                {error.password && <span style={{color:'red'}}>{error.password}</span>}
            </div>

            <button type="submit">Submit</button>
            <ToastContainer/>
        </form>
    
    </div>
}

export default Home;