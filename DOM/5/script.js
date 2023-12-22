let score = 0;

let name = prompt('Enter your name');
document.querySelector('#name').innerText = name;

function main(){

    let myTable = document.querySelector('#myTable');
    myTable.replaceChildren()
    let counter = 0;

    const arr = new Array(900);
    for(let i=0; i<900; i++) arr[i] = i+1;

    arr.sort((a,b)=> Math.random() - 0.5);

    for(let i=1; i<=30; i++){ //10 rows
        let tr = document.createElement('tr'); 

        for(let i=1; i<=30; i++){ //10 columns
            let td = document.createElement('td');
            // td.innerText = arr[counter];
            td.setAttribute('id', arr[counter]);
            counter++;
            td.addEventListener('click', onClickHandler);

            tr.appendChild(td);
        }

        myTable.appendChild(tr);
    }


}

function onClickHandler(e){

    //logic for disabled cell
    if(e.target.style.backgroundColor == 'red') return

    const clickedNum = e.target.getAttribute('id')

    if(isPrime(clickedNum)){ //clicked on prime number
        alert('Better Luck Next Time');
        window.location.reload();
        return
    }
    else { //clicked on non-prime number
        score++;
        console.log("score ",score);
        document.querySelector('#score').innerText = score;
    }


    //disabling multiples of non-prime numbers
    for(let i=clickedNum; i<=900; i++){
        if(i % clickedNum == 0) { //all the multiples
            document.getElementById(i).style.backgroundColor = 'red';
        }
    }

    //handle 1
    if(clickedNum == 1){
        alert("You have won!!")
        window.location.reload();
    }
}

//checking prime number
function isPrime(num){
    if(num == 1) return false
    for(let i=2; i<num; i++) {
        if(num % i == 0) return false;
    }
    return true;
}


main();
function main(){

    let myTable = document.querySelector('#myTable');
    myTable.replaceChildren()
    let counter = 0;

    const arr = new Array(900);
    for(let i=0; i<900; i++) arr[i] = i+1;

    arr.sort((a,b)=> Math.random() - 0.5);

    for(let i=1; i<=30; i++){ //10 rows
        let tr = document.createElement('tr'); 

        for(let i=1; i<=30; i++){ //10 columns
            let td = document.createElement('td');
            // td.innerText = arr[counter];
            td.setAttribute('id', arr[counter]);
            counter++;
            td.addEventListener('click', onClickHandler);

            tr.appendChild(td);
        }

        myTable.appendChild(tr);
    }


}

function onClickHandler(e){

    //logic for disabled cell
    if(e.target.style.backgroundColor == 'red') return

    const clickedNum = e.target.getAttribute('id')

    if(isPrime(clickedNum)){ //clicked on prime number
        alert('Better Luck Next Time');
        window.location.reload();
        return
    }
    else { //clicked on non-prime number
        score++;
        console.log("score ",score);
        document.querySelector('#score').innerText = score;
    }


    //disabling multiples of non-prime numbers
    for(let i=clickedNum; i<=900; i++){
        if(i % clickedNum == 0) { //all the multiples
            document.getElementById(i).style.backgroundColor = 'red';
        }
    }

    //handle 1
    if(clickedNum == 1){
        alert("You have won!!")
        window.location.reload();
    }
}

//checking prime number
function isPrime(num){
    if(num == 1) return false
    for(let i=2; i<num; i++) {
        if(num % i == 0) return false;
    }
    return true;
}


main();
function main(){

    let myTable = document.querySelector('#myTable');
    myTable.replaceChildren()
    let counter = 0;

    const arr = new Array(900);
    for(let i=0; i<900; i++) arr[i] = i+1;

    arr.sort((a,b)=> Math.random() - 0.5);

    for(let i=1; i<=30; i++){ //10 rows
        let tr = document.createElement('tr'); 

        for(let i=1; i<=30; i++){ //10 columns
            let td = document.createElement('td');
            // td.innerText = arr[counter];
            td.setAttribute('id', arr[counter]);
            counter++;
            td.addEventListener('click', onClickHandler);

            tr.appendChild(td);
        }

        myTable.appendChild(tr);
    }


}

function onClickHandler(e){

    //logic for disabled cell
    if(e.target.style.backgroundColor == 'red') return

    const clickedNum = e.target.getAttribute('id')

    if(isPrime(clickedNum)){ //clicked on prime number
        alert('Better Luck Next Time');
        window.location.reload();
        return
    }
    else { //clicked on non-prime number
        clickAudio.play();
        score++;
        console.log("score ",score);
        document.querySelector('#score').innerText = score;
    }


    //disabling multiples of non-prime numbers
    for(let i=clickedNum; i<=900; i++){
        if(i % clickedNum == 0) { //all the multiples
            document.getElementById(i).style.backgroundColor = 'red';
        }
    }

    //handle 1
    if(clickedNum == 1){
        alert("You have won!!")
        window.location.reload();
    }
}

//checking prime number
function isPrime(num){
    if(num == 1) return false
    for(let i=2; i<num; i++) {
        if(num % i == 0) return false;
    }
    return true;
}


main();