import axios from "axios";
import fs from "node:fs/promises";
axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
     
    fs.writeFile('data.json',JSON.stringify(response.data))
    .then(()=>{
        console.log("write to the file")
    })
    .catch((err)=>{
        console.log(err)
    })
})
.catch((err)=>{
    console.log(err);
})
