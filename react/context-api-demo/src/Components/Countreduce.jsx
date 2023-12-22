import React from 'react'
import { useReducer } from 'react'

function Countreduce() {

    let initalstate = {
        count: 0,
        name: "kau gote button click kar"
    }


    const [state, dispatch] = useReducer(reduce, initalstate)


    function reduce(state, action) {
        if (action.type == "inc") {
            return {
                count: state.count + 1,
                name: ["raja" , "chinky"]
            }
        }
        else if (action.type == "dec") {
            return { count: state.count - 1 , name : "ITI" }
        }
        else {
            return {
                count: 0 ,
                name : "mgh banda ku zero"
            }
        }
    }
    function dec() {
        dispatch({ type: "dec" })
    }

    return (
        <>
            <h1>Count BY using useReduce </h1>
            <h2>count:{state.count}</h2>
            <h3>Name : {state.name}</h3>
            <button onClick={() => dispatch({ type: "inc" })}>Increase</button>
            <button onClick={dec}>Decrease</button>
            <button onClick={() => dispatch({ type: "zero" })}>Zero</button>

        </>
    )
}

export default Countreduce