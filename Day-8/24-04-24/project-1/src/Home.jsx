import { useEffect, useState } from "react";


function Home(){

    const [products, setProducts] = useState([])

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
        .then((res)=> res.json())
        .then((data) => {
            console.log(data);
            setProducts(data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);

    return <div style={{display: "flex", flexWrap: 'wrap'}}>
        {
            products.map((v,i) => (
                <div>
                    <div className="card">
                        <div className="cardimg">
                            <img width='150px' src={v.image} alt="images" />
                        </div>
                        <div className="card-body">
                            <h2 style={{color: 'rgb(66 103 178)', fontSize: '30px'}}>{v.category}</h2>
                            <h3 style={{fontSize: '20px'}}>{v.title}</h3>
                            <h2>₹{v.price}</h2>
                            <h3 style={{fontSize: '18px'}}>Rating: {v.rating.rate}</h3>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>

}

export default Home;