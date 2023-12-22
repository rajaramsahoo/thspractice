import { Link } from "react-router-dom"

function Users(props) {
    return (
        <>
        
            {props.users.map((ele, index) => {
                return (

                    <div key={index}>
                        <img height={100} src={ele.avatar_url} />

                        <h1>{ele.login}</h1>
                        {/* <a href={ele.html_url}>profile</a> */}
                        <Link to={`/user/${ele.login}`}>profile</Link>
                        <hr />
                    </div>

                )
            })}
        </>
    )
}

export default Users