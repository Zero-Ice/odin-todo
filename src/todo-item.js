function ToDoItem() {
  this.project = "";
  this.title = "";
  this.description = "";
  this.dueDate = new Date();
  this.priority = 0;
  this.done = false;
  this.notes = "";
}

function getToDoItemsFromStorage() {
  const todos = localStorage.getItem("todos");
  if (todos != null) {
    return JSON.parse(todos);
  } else {
    const newTodos = [];
    saveToDos(newTodos);
    return newTodos;
  }
}

function saveToDos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addNewToDoItem(
  projectName,
  title,
  description,
  dueDate,
  priority,
  notes
) {
  const tdi = new ToDoItem();
  tdi.project = projectName;
  tdi.title = title;
  tdi.description = description;
  tdi.dueDate = dueDate;
  tdi.priority = priority;
  tdi.notes = notes;

  const todos = getToDoItemsFromStorage();
  todos.push(tdi);
  saveToDos(todos);
}

export { ToDoItem, getToDoItemsFromStorage, saveToDos, addNewToDoItem };
