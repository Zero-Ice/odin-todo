function ToDoItem() {
  this.project = "";
  this.title = "";
  this.description = "";
  this.dueDate = new Date();
  this.priority = 0;
  this.done = false;
  this.notes = "";

  this.setTodo = function (project, title, desc, duedate, priority, notes) {
    this.project = project;
    this.title = title;
    this.desc = desc;
    this.dueDate = duedate;
    this.priority = priority;
    this.notes = notes;
  };
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
  return todos;
}

function getTodos(projectName) {
  const todos = getToDoItemsFromStorage();
  const projectTodos = todos.filter((todos) => todos.project === projectName);

  return projectTodos;
}

function removeTodo(todoItem) {
  const todos = getToDoItemsFromStorage();
  const index = todos.findIndex(
    (tdi) =>
      tdi.project == todoItem.project &&
      tdi.description == todoItem.description &&
      tdi.title == todoItem.title
  );

  if (index == -1) return;

  todos.splice(index, 1);
  saveToDos(todos);
}

export { ToDoItem, getTodos, saveToDos, addNewToDoItem, removeTodo };
