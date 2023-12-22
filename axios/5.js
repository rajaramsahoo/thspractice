import axios from "axios";
import readlinesync from "readline-sync";
let num1 = readlinesync.questionInt("Enter the first number:- ");
let num2 = readlinesync.questionInt("Enter the second number:- ")


axios.get(`https://appserver-w05c.onrender.com/add/${num1}/${num2}`)
.then((res1)=>{
       
    console.log(`Adding of num1 & nume2 is: ${res1.data}`)
    let num3 = readlinesync.questionInt("Enter the third number:- ")

    axios.get(`https://appserver-w05c.onrender.com/add/${num3}/${res1.data}`)


    .then((res2)=>{
        
        console.log(`Adding of num3 and res1: ${res2.data}`);
        let num4=readlinesync.questionInt("Enter the 4th number")

        axios.get(`https://appserver-w05c.onrender.com/add/${num4}/${res2.data}`)

        .then((res3)=>{


            console.log(`Adding of num4 and rse2: ${res3.data}`)


        })
        .catch((err)=>{
            console.log(err)})
    })
    .catch((err)=>{
        console.log(err);
    })


})
.catch((err)=>{
    console.log(err)
})