

function Card({img,Rating,Name,Price,Description}){
    
    return <>
        <div className="card">
            <img width="200" src={img} alt="images" />
            <h3>Rating: {Rating}</h3>
            <h2>Name: {Name}</h2>
            <h2>₹{Price}</h2>
            <p>Description: {Description}</p>
        </div>
    </>

}

export default Card;