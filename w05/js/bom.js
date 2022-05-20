const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", ()=>{
    
    const newElement = document.createElement("li");
    const deleteBtn = document.createElement("button");

    newElement.textContent = input.value;
    newElement.appendChild(deleteBtn);
    deleteBtn.textContent = "X";
    input.value="";

    list.appendChild(newElement);
    deleteBtn.addEventListener("click", ()=>{list.removeChild(newElement)});
    input.focus();
});


