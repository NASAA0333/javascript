// todo.js

let todos = [];

//Todo add
function addOne(newTodo) {
  todos.push(newTodo);
}

// status uurcluh :func
function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
}

// ner uurcluh : func
function editName(index, name) {
  let item = todos[index];
  item.name = name;
}

// doto delete one item
function deleteOne(index) {
  let arr = [];
  for (i = 0; i < todos.length; i++) {
    if (i != index) {
      arr.push(todos[i]);
    }
  }
  todos = arr;
}
// todo delete all
function deleteAll() {
  todos = [];
}

// RUNNING APPLICATION
addOne({ name: "Geree tseverleh", status: "TODO" });
addOne({ name: "Hool hiih ", status: "TODO" });
addOne({ name: "JS sudlah ", status: "TODO" });
addOne({ name: "13579 ", status: "TODO" });
editStatus(1, "Dones");
console.log(todos);

// filter books
