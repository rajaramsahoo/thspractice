import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

function User() {
    const [profile, setProfile] = useState({})
    const [repo, setRepo] = useState([])


    let { userName } = useParams()
    // console.log(userName)

    function findData(user) {
        const url = `https://api.github.com/users/${user}`
        axios.get(url)
            .then((res) => {
                // console.log(res.data)
                setProfile(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        findData(userName)
        getRepo(userName)
    }, [])

    function getRepo(user) {
        const url = `https://api.github.com/users/${user}/repos`
        axios.get(url)
            .then((res) => {
                console.log(res.data)
                setRepo(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <div>
                <img height={200} src={profile.avatar_url} />
                <h1>login ID:{userName}</h1>
                <h3>Name:{profile.name}</h3>
                <h3>Email:{profile.email}</h3>
                <h3>Followers:{profile.followers}</h3>
            </div>
            <div>
                {repo.map((ele) => {
                    return (
                        <>
                            <h4>{ele.name}</h4>
                            <button><a href={ele.html_url} target="_main"> REPO</a></button>

                        </>
                    )
                })}
            </div>
        </>
    )
}

export default User