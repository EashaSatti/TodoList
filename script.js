// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();
  // Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //   check mark button
  const CompletedButton = document.createElement("button");
  CompletedButton.innerHTML = '<i class="fas fa-check">C</i>';
  CompletedButton.classList.add("complete-btn");
  todoDiv.appendChild(CompletedButton);

  //   check trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash">D</i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //   APPEND TODO LIST
  todoList.appendChild(todoDiv);
  // clear todo input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // DEL todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitioned", function () {
      todo.remove();
    });
  }
  // mark check
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
