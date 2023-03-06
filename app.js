const listContainer = document.querySelector(".list-container");
const input = document.querySelector("#text");
const plusButton = document.querySelector("#plus");
// currently modal's window display is none
const modalWindow = document.querySelector(".modal");
var span = document.getElementsByClassName("close")[0];
const modalInput = document.querySelector("#changeValue");
const modalButton = document.querySelector("#change");
let storeValue;
let maxCreated = 0;

plusButton.addEventListener("click", createLists);
input.addEventListener("keypress", (event) => {
  if(event.key === "Enter") {
      if(input.value === ""){
      alert("Write text first")
    } else {
      if(maxCreated <= 10){
    maxCreated++;
    let liCreated = document.createElement("li");
    let span = document.createElement("span");
    let buttonContainer = document.createElement("div");
    let deleteButton = document.createElement("button");
    let editButton = document.createElement("button");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("checkbox");
    
    buttonContainer.classList.add("button-container");
    deleteButton.classList.add("delete");
    editButton.classList.add("edit");
    
    liCreated.textContent = input.value;
    input.value = "";
    deleteButton.textContent = "delete";
    editButton.textContent = "edit";
    
    span.append(liCreated.textContent)
    buttonContainer.append(deleteButton, editButton);
    liCreated.childNodes[0].remove()
    liCreated.append(span)
    liCreated.append(checkbox)
    liCreated.append(buttonContainer);
    listContainer.append(liCreated);

    checkbox.addEventListener("click", strikeText);
    
    deleteButton.addEventListener("click", deleteFunction);

    editButton.addEventListener("click", editFunction);
    }
     else{
      alert("Your reached the maximum of created li's!");
      input.value = "";
    }
  }
  }
});
    
function createLists(){
    if(input.value === ""){
      alert("Write text first")
    } else {
      if(maxCreated <= 10){
    maxCreated++;
    let liCreated = document.createElement("li");
    let span = document.createElement("span");
    let buttonContainer = document.createElement("div");
    let deleteButton = document.createElement("button");
    let editButton = document.createElement("button");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("checkbox");
    
    buttonContainer.classList.add("button-container");
    deleteButton.classList.add("delete");
    editButton.classList.add("edit");
    
    liCreated.textContent = input.value;
    input.value = "";
    deleteButton.textContent = "delete";
    editButton.textContent = "edit";
  
    span.append(liCreated.textContent)
    buttonContainer.append(deleteButton, editButton);
    liCreated.childNodes[0].remove()
    liCreated.append(span)
    liCreated.append(checkbox)
    liCreated.append(buttonContainer);
    listContainer.append(liCreated);

    checkbox.addEventListener("click", strikeText);
    
    deleteButton.addEventListener("click", deleteFunction);
    
    editButton.addEventListener("click", editFunction);
    }
     else{
      alert("Your reached the maximum of created li's!");
      input.value = "";
      console.log(maxCreated);
    }
  }
}

function strikeText(){
  let element = this.closest('li');
  // let textElement = element.closest('li');
  // let text = textElement.childNodes[0].textContent;
    if(element.classList.contains("active")){
      element.classList.remove("active")
      element.childNodes[0].style.textDecoration = "none"
    } else{
      element.classList.add("active");
      element.childNodes[0].style.textDecoration = "line-through"
    }
}

function deleteFunction(){
  let storeElement = this.closest('li');
  storeElement.remove();
  maxCreated--;
}

function editFunction(){
  // When clicking x the window is closed
  span.onclick = function() {
  modalWindow.style.display = "none";
  }
  
  // when clicking outside the window, the window closes
  window.onclick = function(event) {
  if (event.target == modalWindow) {
    modalWindow.style.display = "none";
    }
  }
  
  let element = this.closest("li")
  
  modalWindow.style.display = "block"
  
  if(modalWindow.style.display === "block"){
    modalButton.onclick = function() {
    storeValue = modalInput.value;
    if(storeValue === ""){
      alert("Please write text")
    } else{
      element.childNodes[0].textContent = storeValue;
      console.log(element.childNodes[0].textContent);
      console.log(storeValue);
      modalInput.value = "";
      modalWindow.style.display = "none";
    }
    }
  }
}