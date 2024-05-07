import { useState } from "react";
import { useEffect } from "react";


function Home(){

    const [products, setProducts] = useState([]);
    // const [filterdata, setFilterData] = useState([]);
    const [category, setCategory] = useState("");

    useEffect(() => {
        if(category !== ""){
            fetch(`http://localhost:8000/products?category=${category}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
                // setFilterData(data);
            })
            .catch((err) => {
                console.error(err);
            })
        }
        else{
            fetch(`http://localhost:8000/products`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
                // setFilterData(data);
            })
            .catch((err) => {
                console.error(err);
            })
        }
    },[category]);

    const hendeldelete = (id) => {
        fetch(`http://localhost:8000/products/${id}`,{
            method: 'DELETE',
        })
        .then((res) => res.json())

        let deletedata = products.filter((v) => v.id !== id);
        setProducts(deletedata);

    }

    // useEffect(() => {
    //     if(category !== ""){
    //         const datafilter = filterdata.filter((v) => v.category === category);
    //         setProducts(datafilter);
    //     }
    //     else{
    //         setProducts(filterdata);
    //     }
    // },[category, filterdata])

    const handelFilter = (category) => {
        setCategory(category);
    }

    console.log(category);

    return <div>

        <div>
            <button onClick={()=>handelFilter("home-decoration")}>Home-Decoration</button>
            <button onClick={()=>handelFilter("skincare")}>Skincare</button>
            <button onClick={()=>handelFilter("")}>Reset</button>
        </div>

        {
            products.map((v,i) => {
                return <div key={v.id}>
                    <img style={{width: "300px"}} src={v.images[1]} alt="images" />
                    <h1>{v.id}</h1>
                    <h2>{v.title}</h2>
                    <p>Price: {v.price}</p>
                    <button onClick={()=>hendeldelete(v.id)}>Delete</button>
                </div>
            })
        }
    </div>
}

export default Home;