import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home(){

    const [todo, setTodo] = useState("");
    const [tododata, setTodoData] = useState([]);

    //create
    const hendelTodo = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:8000/todos`,{
            todo: todo
        })
        .then((res)=>{
            toast.success("Data Submitted Succefully");
            fetchData();
            setTodo("");
        })
        .catch((err) => {
            console.log("Somthing went Wrong");
            toast.error("Somthing went Wrong");
        })
    }

    // fetchdata

    const fetchData = () => {
        axios.get(`http://localhost:8000/todos`)
        .then((res) => {
            console.log(res.data.reverse());
            setTodoData(res.data);
        })
        .catch((err) => {
            console.log("Somthing went Wrong");
            toast.error("Somthing went Wrong");
        })
    }

    // read

    useEffect(() => {
        fetchData();
    },[]);

    // delete

    const hendeldelete = (id) => {
        axios.delete(`http://localhost:8000/todos/${id}`)
        .then((res) => {
            console.log("data deleted successfully");
            toast.success('Data Deleted Successfully');
            setTodoData(tododata.filter((v) => v.id !== id));
        })
    }

    return <div>

        <h1>Todo List</h1>

        <form onSubmit={hendelTodo}>
            <input style={{height: "30px", width: "300px", outline: "none", padding: "5px 10px",fontSize: "18px", marginRight: "20px", borderRadius: "10px", border: "1px solid gray"}} type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Enter Your Activities...."/>
            <button className="todobtn" style={{border: "1px solid black", padding: "9px 20px"}}>Submit</button>
        </form>

        <div>
            {
                tododata.map((v,i) => {
                    return <div key={v.id}>
                        <h3>{v.todo}</h3>
                        <button onClick={() => hendeldelete(v.id)}>Delete</button>
                    </div>
                })
            }
        </div>

        <ToastContainer />
    </div>
}

export default Home;