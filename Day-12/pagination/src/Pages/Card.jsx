

function Card({id,title,body}){
    return <div style={{border: '1px solid black', margin: '20px', width: '500px', padding: '20px'}}>
        <h1>{id}</h1>
        <h2>{title}</h2>
        <h3>{body}</h3>
    </div>

}

export default Card;