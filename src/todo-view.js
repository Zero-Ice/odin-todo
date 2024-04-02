import getTodoCard from "./todo-card";

const container = document.getElementById("container");

function refreshTodoView(todos) {
  container.innerHTML = "";
  for (const t of todos) {
    const todoCard = getTodoCard(t);
    container.appendChild(todoCard);
  }
}

export { refreshTodoView };
