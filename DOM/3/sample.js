let url = "https://jsonplaceholder.typicode.com/users";

async function main(){
    try {
        
        let response = await axios.get(url)
        console.log(response.data);
        createTable(response.data)
        
    } catch (error) {
       console.log(error) 
    }
}
main();

 function createTable(data){
    let table= document.querySelector("#myTable")
    data.forEach((element) => {
    let tr = document.createElement("tr");
    let td1= document.createElement("td")
    td1.innerText=element.id
    let td2= document.createElement("td")
    td2.innerText=element.name
    let td3= document.createElement("td")
    td3.innerText=element.username
    let td4= document.createElement("td")
    td4.innerText=element.email
    let td5= document.createElement("td")
    td5.innerText=(`${element.address.street},${element.address.suite}`)
    let td6= document.createElement("td")
    td6.innerText=element.address.geo.lng
    let td7= document.createElement("td")
    td7.innerText=element.address.geo.lat
    let td8= document.createElement("td")
    td8.innerText=element.phone
    let td9= document.createElement("td")
    td9.innerText=element.website
    let td10= document.createElement("td")
    td10.innerText=(`${element.company.name}`)
    tr.append(td1, td2, td3,td4, td5, td6, td7,td8,td9,td10);
    table.append(tr)
        
    });
    
   
   
 }
