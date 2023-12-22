import React, { useState } from 'react'

function TodoList() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')

    function addTask() {
        console.log("task to be add")
        // setTasks(task)
        const list = [...tasks, task];
        setTasks(list)
        setTask("")


    }
    function onChangeHandler(e) {
        setTask(e.target.value)
        // console.log(e.target.value)

    }
    function deleteList(index){
        console.log("delete hela ki")
        const dList = [...tasks];
        dList.splice(index ,1);
        setTasks(dList)
    }

    return (
        <>
            <h1>TodoList</h1>

            <input type='text' placeholder='Enter the task' onChange={onChangeHandler}  value={task}/>
            <button onClick={addTask}>Add</button>

            {tasks.map((ele ,index ) => {
                return (
                    <>
                    <p key={index}>{ele}</p>
                    <button onClick={deleteList} >Delete</button>


                    </>
                )
            })}


        </>
    )
}

export default TodoList