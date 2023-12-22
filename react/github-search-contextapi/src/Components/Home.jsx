import Search from "./Search"
import Users from "./Users";


function Home(props) {
    return (
        <>
            <center>
                <h1>GitHUB CLONE</h1>
                <Search searchAPI={props.searchAPI} clear={props.clear} alert={props.alert} />
                <hr/>
                <Users users={props.users} />
            </center>
        </>
    )
}

export default Home;

