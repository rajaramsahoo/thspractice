import { useState } from "react"
import Alert from "./Alert";

function Search(props) {
    // console.log(props.searchAPI)
    const [userName, setUserName] = useState("")

    function onChangeHandle(e) {
        console.log(e.target.value)
        setUserName(e.target.value)
    }

    function onClickHandle(e) {
        e.preventDefault();
        // if (userName.trim().length == 0) {
        //     alert("Enter the valid username")
        //     setUserName("")
        // }
        // else 
        props.searchAPI(userName)
        if(userName.trim().length==0){
            setUserName('')
        }

    }

    function onClear(e) {
        e.preventDefault();
        props.clear()
        setUserName("")
    }



    return (
        <>
            <Alert alert = {props.alert}/>
            <form>
                Enter the username :
                <input type="text" placeholder="Enter the username" onChange={onChangeHandle} value={userName} />
                <button onClick={onClickHandle}>Search</button>
                <button onClick={onClear}>Clear</button>
            </form>
            {userName}

        </>
    )
}

export default Search