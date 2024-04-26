import Card from "./Card";

function Home(){

    let person = [
        {
            name: "Ram",
            age: 22,
            city: 'Surat'
        },
        {
            name: "Sita",
            age: 22,
            city: 'Surat'
        },
        {
            name: "Laxman",
            age: 22,
            city: 'Surat'
        },
        {
            name: "Bhrat",
            age: 22,
            city: 'Surat'
        },
        {
            name: "Hanuman",
            age: 22,
            city: 'Surat'
        },
]


    return <div>
        {
            person.map((v,i) => <Card key={i} {...v}/>)
        }
    </div>
}

export default Home;