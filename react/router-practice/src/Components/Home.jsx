import { Link } from "react-router-dom"

function Home(){
    return(
     <>
        <h1>Home</h1>
        <Link to="/About">About</Link>
     </>
        
    )
}
export default Home