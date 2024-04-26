import { useEffect, useState } from "react";

function Home(){

    const [count , setCount] = useState(0);

    const [data, setData] = useState(0);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(data);
        })
    },[]);

    // hello

    const hendelcount = () => {
        setCount(count + 1);
    }


    return <div>
        <h1>{count}</h1>
        <button onClick={hendelcount}>Count</button>
    </div>
}

export default Home;