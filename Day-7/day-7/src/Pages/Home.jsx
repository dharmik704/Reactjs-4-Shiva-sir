import { useEffect, useState } from "react";

function Home(){

    const [product, setProduct] = useState([]);

    useEffect(() => {
    
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setProduct(data);
        })
        .catch((err) => {
            console.log('somthing went wrong');
        });
    
    },[]);

    return <>
        {
            product.map((v,i) => (
               <div>
                    <div className="container">
                        <div className="row">
                            <div className="w-4">
                                <div className="card">
                        
                            </div>
                            </div>
                        </div>
                    </div>
               </div>
            ))
        }
    </>
}

export default Home;