import { useState } from "react"


function FormObj() {
    const [BioData, setBioData] = useState({
        Name: "",
        Age: "",
        Email: ""

    })

    function onHandleChange(e){
        // console.log(e.target.value,e.target.name)
        // setBioData(e.target.value, e.target.name)
        setBioData({
            ...BioData,
            [e.target.name]:e.target.value
        })
    }

    function onHandleClick(e){
        e.preventDefault()
        setBioData({ 
            Name: "",
            Age: "",
            Email: ""
        })

    }
    
    function onHandleSumbit(e){
        e.preventDefault()

    }


    return (
        <>
            <h1>creat a form by using Object</h1>
            <form onSubmit={onHandleSumbit}>
                <label>
                    Full Name :
                    <input type="text" onChange={onHandleChange} value={BioData.Name} name="Name" />
                </label>

                <label>
                    Age :
                    <input type="number" onChange={onHandleChange} value={BioData.Age} name = "Age"/>
                </label>
                <label>
                    Email Id :
                    <input type="email" onChange={onHandleChange} value={BioData.Email} name="Email"/>
                </label>
                <button onClick={onHandleClick}>Clear</button>
            </form>
            <p> Full Name = {BioData.Name}</p>
            <p> Age = {BioData.Age}</p>
            <p> Email = {BioData.Email}</p>
            <button onSubmit={onHandleChange}>Sumbit</button>

        </>

    )
}

export default FormObj