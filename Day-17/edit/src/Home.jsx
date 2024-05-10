import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home(){

    const [users, setUsers] = useState([]);
    const [edit, setEdit] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/users')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setUsers(data);
        })
        .then((err) => {
            console.log(err);
        })
    },[]);

    const hendelEdit = (id) => {
        let editdata = users.find((v) => v.id == id);
        setEdit(editdata);
    }
    console.log(edit);

    const hendelUpdate = () => {
        fetch(`http://localhost:8000/users/${edit.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name: edit.name,
                email: edit.email,
                city: edit.city
            })
        })
        .then((res) => res.json())
        .then((data => {
            console.log(data);
            toast.success("Data Updated Successfully");
        }))
    }

    return <div>
        <div>
            {
                users.map((v, i) => {
                    return <div key={i}>
                        <h2>{v.name}</h2>
                        <h3>{v.email}</h3>
                        <p>{v.city}</p>
                        <button onClick={()=>hendelEdit(v.id)}>Edit</button>
                    </div>
                })
            }
        </div>
        <div>
            {
                (edit && <div>
                    <input value={edit.name} type="text" onChange={(e)=>setEdit({...edit, name: e.target.value})} placeholder="Name" /><br/><br/>
                    <input value={edit.email} type="email" onChange={(e)=>setEdit({...edit, email: e.target.value})} placeholder="Email" /><br/><br/>
                    <input value={edit.city} type="text" onChange={(e)=>setEdit({...edit, city: e.target.value})} placeholder="City" /><br/><br/>
                    <button onClick={hendelUpdate}>Update</button>
                </div>)
            }
        </div>
        <ToastContainer />
    </div>
}

export default Home;