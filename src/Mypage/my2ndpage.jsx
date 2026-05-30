
// import "./mypage.css"

function Heading(){
    return(
        <>
            <h1>My 2nd React page.</h1>
        </>
    )
}
function Body(params){
    console.log(params);
    return(
        <>
            <p>Hello There, I am {params.name}.</p>
            <p>I am {params.age} years old.</p>
            <p>I work as a {params.work}.</p>
            <hr></hr>
        </>
    )
}

let users = [
    {name: "Vishal", age: 21, work: "Software Engineer"},
    {name: "Rahul", age: 30, work: "Naalandu!!!"},
    {name: "Rohit", age: 25, work: "Data Scientist"},
    {name: "Suresh", age: 28, work: "Product Manager"},
]

export default function Bundle(){
    return(
        <>
            <Heading />
            {users.map((user)=> (
                <Body key={user.name} name={user.name} age={user.age} work={user.work}/>
            ))}
        </>
    )
}