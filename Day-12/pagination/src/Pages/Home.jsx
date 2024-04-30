import { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";

function Home(){

    const [posts, setPosts] = useState([]);
    const [pages, setPages] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:8000/posts?_page=${pages}_limit=10`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setPosts(data);
        })
        .catch((err) => {
            console.log('somthing went wrong!');
        })
    },[pages]);

    return <div>
        <button disabled={pages === 1} style={{background: 'dodgerBlue', color: 'white'}} onClick={()=> setPages(pages-1)}>Prev</button>
        <button style={{background: 'black', color: 'white', margin: '0 20px'}}>{pages}</button>
        <button disabled={pages > posts.length-1} style={{background: 'dodgerBlue', color: 'white'}} onClick={()=> setPages(pages+1)}>Next</button>

           {
                posts.map((v, i) => { 
                    return <Card key={i} {...v}/>
                })
           }
           
    </div>

}

export default Home;