

function Card({name,age,city}){

    return <div style={{border: '1px solid black', borderRadius: '10px', width: "100%", lineHeight: '20px', margin: '10px', backgroundColor: 'gainsboro'}}>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h3>{city}</h3>
    </div>
}

export default Card;