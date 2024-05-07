import { useEffect, useState } from "react";


function Home(){

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`http://localhost:8000/products?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setProducts(data);
        })
        .catch((err) => {
            console.log('Somthing went wrong');
        })
    },[search]);

    const hendelAsce = () => {
        const ascedata = [...products].sort((a,b) => a.price - b.price);
        setProducts(ascedata);
    }

    const hendelDesc = () => {
        const descdata = [...products].sort((a,b) => b.price - a.price);
        setProducts(descdata);
    }

    return <div>
        
        <div>
            <button onClick={hendelAsce}>Asce</button>
            <button onClick={hendelDesc}>Desc</button><br /><br />
        </div>

        <div>
            <input value={search} placeholder="Search...." type="text" onChange={(e)=>setSearch(e.target.value)} /><br/><br/>
        </div>


        {
            products.map((v,i) => {
                return <div>
                    <img style={{width: "400px"}} src={v.images[1]} alt="images" />
                    <h1>{v.id}</h1>
                    <h2>{v.title}</h2>
                    <p>Price: {v.price}</p>
                </div>
            })
        }
    </div>
}

export default Home;