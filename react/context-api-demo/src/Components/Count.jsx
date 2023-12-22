import React from 'react'
import { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)

  function Increase() {
    setCount(count+1)
  }

  return (
    <>
      <h1>Count BY using State</h1>
      <h1>count:{count}</h1>
      <button onClick={Increase}>Increase </button> 
      <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </>
  )
}

export default Count