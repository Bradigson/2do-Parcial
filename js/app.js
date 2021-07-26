let input = document.querySelector("input");
let addBtn = document.querySelector("#btn-add");
let ul = document.querySelector("ul");
let clear = document.querySelector(".clear");

addBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const text = input.value;
    if(text !== ""){
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;

        li.appendChild(p);
        ul.appendChild(li);
        input.value="";
        clear.style.display="none";
    }else{
        alert("Debes de agregar un elemento a la lista");
    }
})