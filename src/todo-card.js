import { removeTodo, toggleTodoCompleted } from "./todo";
import { refresh } from ".";

function getTodoCard(todoItem) {
  const div = document.createElement("div");
  div.classList = `task ${todoItem.priority}`;

  const deleteButton = document.createElement("button");
  deleteButton.classList = "todo-card-delete-button";
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", () => {
    console.log(`removing todo item ${todoItem.project} ${todoItem.title}`);
    removeTodo(todoItem);
    refresh();
  });
  div.appendChild(deleteButton);

  const title = document.createElement("h3");
  title.innerText = todoItem.title;
  div.appendChild(title);

  const desc = document.createElement("p");
  desc.innerText = todoItem.description;
  div.appendChild(desc);

  const completedDiv = document.createElement("div");

  const completedCheckbox = document.createElement("input");
  completedCheckbox.type = "checkbox";
  completedCheckbox.checked = todoItem.done;
  completedCheckbox.addEventListener("click", (e) => {
    console.log(`Checked todo completed`);
    toggleTodoCompleted(todoItem);
  });
  completedDiv.appendChild(completedCheckbox);

  const completedLabel = document.createElement("label");
  completedLabel.innerText = "completed";
  completedDiv.appendChild(completedLabel);

  div.appendChild(completedDiv);

  return div;
}

export default getTodoCard;
