import { useState } from "react";

function Form() {

    const [Data, setData] = useState([])
    const [name, setName] = useState('')
    function onChangeHandler(e) {
        console.log(e.target.value)
        setName(e.target.value)
    }

    function onHandleClick(e) {
        e.preventDefault()
        setName(e.target.value)

    }

    function OnHandleSumbit() {
        setData([...Data, name])
        setName('')
    }

    function onDelete(e){
        e.preventDefault()
        setName('')
    }
    return (
        <>
            <form>
                Name ta side box re entry kar :
                <input type="text"
                    placeholder="Enter The Name"
                    onChange={onChangeHandler}
                    value={name}

                />


                <button onClick={onHandleClick}>ClearBox</button>

            </form>
            {Data.map((ele) => {
                return (
                   <>
                    <p>{ele}</p>
                    <button onClick={onDelete}>Delete</button>
                   </>
                )
               
            })}
            <button onClick={OnHandleSumbit}>Submit</button>


        </>
    )
}

export default Form;