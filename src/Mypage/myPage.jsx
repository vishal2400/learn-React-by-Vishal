
// import "./mypage.css"
import reactLogo from '../assets/react.svg' 
// this is the way to get image in react, 
// we have to import it first and then use it in the src attribute of the img tag.
//Because in react we cannot directly use the relative path of the image, 
// we have to import it first and then use it in the src attribute of the img tag.
//but we can use direct path of the image in the public folder and css files, 
// because the public folder is served as the root of the project.

function Header() {
    return (
        <>

            <header>
                <img src={reactLogo} className="logo" alt="React-Logo"></img>
                <h1>My 1st React Page</h1>
            </header>
        </>
    )
}
function Main() {
    return (
        <main>
            <h1>Fun fact About React</h1>
            <p> React is a JavaScript library for building user interfaces. </p>
            <ul>
                <li>it is simple to learn</li>
                <li>it is fast and efficient</li>
                <li>it has a large and active community</li>
                <li>it is widely used in the industry</li>
            </ul>
        </main>
    )
}
function Footer() {
    return (
        <>
            <footer>
                <small>&copy; 2026 My React Page. All rights reserved.</small>
            </footer>
        </>
    )
}

export default function MyPage() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}
