function getTodoCard(todoItem) {
  const div = document.createElement("div");
  div.className = "todo-card";

  const title = document.createElement("p");
  title.innerText = todoItem.title;

  div.appendChild(title);

  return div;
}

export default getTodoCard;
