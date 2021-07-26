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
        li.appendChild(addDeletebtn());
        ul.appendChild(li);
        input.value="";
        clear.style.display="none";
    }else{
        alert("Debes de agregar un elemento a la lista");
    }
});

function addDeletebtn(){
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "X";
    deletebtn.className = "btn-delete";

    deletebtn.addEventListener("click",(e)=>{
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");

        if(items.length === 0){
            clear.style.display = "block";
        }

    });
   return deletebtn;

}