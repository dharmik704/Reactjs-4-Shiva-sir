import { useEffect, useState } from "react";


function Home(){

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setPost(data);
        })
        .catch((err) => {
            console.log('somthing went wrong');
        })
    },[]);


    return <div>
        <ul>
        {
            post.map((v,i) => {
                return <div key={v.id}>
                    <li>
                        <p>{v.title}</p>
                        <li>
                            <p>{v.body}</p>
                        </li>
                    </li>
                </div>
            })
        }
        </ul>
    </div>

}

export default Home;