import "./style.css";
import {
  refreshProjectListing,
  currentSelectedProject,
} from "./project-list-view";
import { refreshTodoView } from "./todo-view";
import { getTodos, addNewToDoItem, ToDoItem } from "./todo";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const container = document.getElementById("container");

var form = document.getElementById("add-todo-form");
if (form.attachEvent) {
  form.attachEvent("submit", processAddTodoForm);
} else {
  form.addEventListener("submit", processAddTodoForm);
}

refresh();

function refresh() {
  refreshProjectListing();
  const selectedProject = currentSelectedProject;
  const todos = getTodos(selectedProject.name);
  refreshTodoView(todos);
}

const addTodoDialog = document.getElementById("dialog");
const addTodoDialogCloseBtn = document.getElementById(
  "add-todo-dialog-close-button"
);
addTodoDialogCloseBtn.addEventListener("click", () => {
  addTodoDialog.close();
});

const addTodoBtn = document.getElementById("add-todo-btn");
addTodoBtn.addEventListener("click", () => {
  addTodoDialog.show();
});

function processAddTodoForm(e) {
  if (e.preventDefault) e.preventDefault();

  const formData = new FormData(document.querySelector("#add-todo-form"));

  const newToDoItem = new ToDoItem();
  const projectName = formData.get("add-todo-projectName");
  const title = formData.get("add-todo-title");
  const desc = formData.get("add-todo-description");
  const date = formData.get("add-todo-duedate");
  const priority = formData.get("add-todo-priority");
  const notes = formData.get("add-todo-notes");

  addNewToDoItem(projectName, title, desc, date, priority, notes);

  const selectedProject = currentSelectedProject;
  const todos = getTodos(selectedProject.name);
  refreshTodoView(todos);

  return false;
}
