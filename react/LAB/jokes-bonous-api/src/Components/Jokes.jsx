import axios from "axios";
import React from "react"
import { useState, useEffect } from "react"

function Jokes(){
    const [funny, setjoke]=useState("")
    const [funny2, setjoke2]=useState("")

    function FetchApi(type,part){
        const url = `https://v2.jokeapi.dev/joke/${type}?type=${part}`;
        if(part=="single"){
            axios.get(url)
        .then((res)=>{
            console.log(res.data.joke)
            setjoke(res.data.joke)
            setjoke2("")

        })
        .catch((err)=>{
            console.log(err)
        })

        }
        else{
            axios.get(url)
        .then((res)=>{
            console.log(res.data)
            setjoke(res.data.setup)
            setjoke2(res.data.delivery)

        })
        .catch((err)=>{
            console.log(err)
        })
        }
        
    }
    useEffect(()=>{
        FetchApi()
    },[])
    return(
       <>
        <h1>mo kala dain</h1>
        <p>{funny}</p>
        <p>{funny2}</p>
        <button onClick={()=>FetchApi('Any' , "single")}>Any single </button>
        <button onClick={()=>FetchApi('Any', "twopart")}>Any two </button>
        <button onClick={()=>FetchApi("Programming","single")} >Programming single </button>
        <button onClick={()=>FetchApi("Programming","twopart")} >Programming two  </button>
       </>
    )
}
export default Jokes