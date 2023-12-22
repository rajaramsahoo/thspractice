import axios from"axios";
// console.time();
// axios.get("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//     console.log(response.data);
//     console.timeEnd();
// })
// .catch((err)=>{
//     console.log(err);
// })
//=====
async function main(){
    try{
        console.log("start");
        let response= await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response.data)
        console.log("end")
    }
    catch(err){
        console.log(err);
    }
}
main();