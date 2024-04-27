import { useState } from "react";


// function Home(){

//     const [data, setData] = useState();

//     const hendelclick = (val) => {
//         console.log('Jai Shree', val);
//     }

//     return <div>
//         <button onClick={() => hendelclick('Ram')}>Click Me</button>
//     </div>
// }

// function Home(){

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     console.log('Email:', email, 'Password:', password);
    
//     return <div>
//         <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email" />
//         <input value={password} type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password"/>
//     </div>
// }

function Home(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formsubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);

        setEmail("");
        setPassword("");
    }

    let isauth = 0;
    
    isauth ? console.log('Successfully Login') : console.log('Somthing Wrong!...');
    // if(isauth){
    //     console.log('Succesfully Loged in');
    // }
    // else{
    //     console.log('Somthing Wrong!...');
    // }
    
    return <div>
        <form onSubmit={formsubmit}>
            <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email" /><br/>
            <input value={password} type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password"/><br/>
            <button>Submit</button>
        </form>
    </div>
}

export default Home;