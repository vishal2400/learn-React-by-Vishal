
let jokes_arr = [
    {
        setup: "I got my daughter a fridge for her birthday.",
        punchline: "I can't wait to see her face light up when she opens it."
    },
    {
        setup: "How did the hacker escape the police?",
        punchline: "He just ransomware!"
    },
    {
        setup: "Why don't pirates travel on mountain roads?",
        punchline: "Scurvy."
    },
    {
        setup: "Why do bees stay in the hive in the winter?",
        punchline: "Swarm."
    },
    {
        setup: "What's the best thing about Switzerland?",
        punchline: "I don't know, but the flag is a big plus!"
    }
]

function Jokes_compo(props){
    return(
        <>
            <p><strong>Setup:</strong> {props.setup} </p>
            <p><strong>Punchline:</strong> {props.punchline} </p>
            <hr></hr>
        </>
    )
}

const Jokes_list = jokes_arr.map((joke)=> {
    return <Jokes_compo setup = {joke.setup} punchline = {joke.punchline}/>
})

export default function Joke(){
    return(
        <>
            <h1>Jokes</h1>
            <br></br>
            {Jokes_list}
        </>
    )
}