function colorChange(){
    let heading = document.querySelector("h1");
    heading.style.color = "red";
}

function changeNumber(){
    let p=document.querySelector("p");
    p.textContent=Number(p.textContent)+1;
    
}
function addHtml(){
    let h2 = document.querySelector("h2");
    let h5 = document.createElement("h5");
    h5.textContent = "created using js fun";
    h2.append(h5);
}