import { removeTodo } from "./todo";
import { refreshTodoView } from "./todo-view";
import { refresh } from ".";

function getTodoCard(todoItem) {
  const div = document.createElement("div");
  div.className = "todo-card";

  const deleteButton = document.createElement("button");
  deleteButton.classList = "todo-card-delete-button";
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", () => {
    console.log(`removing todo item ${todoItem.project} ${todoItem.title}`);
    removeTodo(todoItem);
    refresh();
  });
  div.appendChild(deleteButton);

  const title = document.createElement("p");
  title.innerText = todoItem.title;

  div.appendChild(title);

  return div;
}

export default getTodoCard;
