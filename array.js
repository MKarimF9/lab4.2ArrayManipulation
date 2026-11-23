

let shoppingList = [];

function addItem(item){
    if (!shoppingList.includes(item) ){
        shoppingList.push(item);
    }
}

function removeLastItem(){
    shoppingList.pop();
}

function displayList(){

    for (let i = 0; i < shoppingList.length; i++){
        console.log(shoppingList[i]);
    }
}


function filterItems(search){
    let searchTerms = []
    
    for (let i = 0; i < shoppingList.length; i++){
        let item = shoppingList[i].toLowerCase();
        if (item.includes(search.toLowerCase())){
                searchTerms.push(shoppingList[i]);
        }
    }
    return searchTerms;
}

const input = document.getElementById("input");
const button = document.getElementById("button");
const unlist = document.getElementById("unlist");
const deleteItem = document.getElementById("delete")

button.addEventListener('click', () => {
    let listInput = input.value;

    if (listInput === "") {
    alert("Please enter a task!");
    return;
  }

  let listItem = document.createElement("li");

  listItem.innerText = listInput;

  unlist.appendChild(listItem);
  addItem(listInput);
  input.value = "";
})

deleteItem.addEventListener("click", function(event){
    removeLastItem();
    const last = unlist.lastElementChild;
    if (last){
        last.remove();
    }
})





