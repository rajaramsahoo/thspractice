
const url ='https://jsonplaceholder.typicode.com/todos';
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

// function createTable(data){
//     //target tbody
//     let myTable = document.querySelector('#myTable');

//     //create tr
//     let tr = document.createElement('tr');

//     //create td1 (column 1)
//     let td1 = document.createElement('td');
//     td1.innerText = data[0].userId

//     //create td2 (column 2)
//     let td2 = document.createElement('td');
//     td2.innerText = data[0].id

//     //create td3 (column 3)
//     let td3 = document.createElement('td');
//     td3.innerText = data[0].title

//     //create td4 (column 4)
//     let td4 = document.createElement('td');
//     td4.innerText = data[0].completed

//     tr.append(td1, td2, td3, td4);

//     myTable.appendChild(tr);
// }
// createTable()
function createTable(data){
    //target tbody
    let myTable = document.querySelector('#myTable');


   data.forEach(element => {
        //create tr
        let tr = document.createElement('tr');


     //create td1 (column 1)
     let td1 = document.createElement('td');
     td1.innerText = element.userId
 
     //create td2 (column 2)
     let td2 = document.createElement('td');
     td2.innerText = element.id
 
     //create td3 (column 3)
     let td3 = document.createElement('td');
     td3.innerText = element.title
 
     //create td4 (column 4)
     let td4 = document.createElement('td');
     td4.innerText = element.completed
 
     tr.append(td1, td2, td3, td4);
 
     myTable.appendChild(tr);
    
   });

   
}
