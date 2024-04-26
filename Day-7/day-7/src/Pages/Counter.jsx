import { useState } from "react";


function Counter() {

    const [count , setCount] = useState(0);

    const hendal = () => {
        setCount(count + 20);
    }

    return <>
        <h1>{count}</h1>

        <button onClick={hendal}>Add</button>
        <button onClick={()=> {setCount(count - 20)}}>Decrease</button>
    </>
}

export default Counter;