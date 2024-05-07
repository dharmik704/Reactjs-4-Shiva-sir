import { useEffect, useState } from "react";


function Home(){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [users, setUsers] = useState([]);

    var udata ={
        username,
        email,
        password
    }

    useEffect(() => {
        fetch('http://localhost:8000/users')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setUsers(data);
        })
        .catch((err) => {
            console.log('Somthing went rong');
        })
    },[]);

    const hendelForm = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/users',{
            method: 'POST',
            body: JSON.stringify(udata),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((data) => {
            console.log(data);
            alert('Data added successfully');
            setUsername("");
            setEmail("");
            setPassword("");

        })
        .catch((err) => {
            console.log('Somthing went rong');
        })
    }

    return <div>
        <form onSubmit={hendelForm}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /><br/><br/>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br/><br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br/><br/>
            <button type="submit">Submit</button>
        </form>

        {
            users.map((v,i) => {
                return <div>
                    <h1>{v.id}</h1>
                    <h2>{v.username}</h2>
                    <p>{v.email}</p>
                </div>
            })
        }

    </div>

}

export default Home;