 
// Create an array to store the to-do list items
let toDoList = [];

 function addItem(item) {
  toDoList.push(item);
}

 function removeItem(index) {
  toDoList.splice(index, 1);
}

 function displayList() {
  console.log("To-Do List:");
  for (let i = 0; i < toDoList.length; i++) {
    console.log(${i + 1}.${toDoList[i]});
  }
}

 addItem("practice js");
addItem("watch film");
displayList();
removeItem(0);
displayList();


 