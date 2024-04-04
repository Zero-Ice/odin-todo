import "./reset.css";
import "./style.css";
import {
  refreshProjectListing,
  currentSelectedProject as currentSelectedProjectName,
} from "./project-list-view";
import { refreshTodoView } from "./todo-view";
import { getTodos, addNewToDoItem, ToDoItem } from "./todo";
import { addProject, getProject } from "./project";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const container = document.getElementById("container");

const addTodoForm = document.getElementById("add-todo-form");
if (addTodoForm.attachEvent) {
  addTodoForm.attachEvent("submit", processAddTodoForm);
} else {
  addTodoForm.addEventListener("submit", processAddTodoForm);
}

const addProjectForm = document.getElementById("add-project-form");
if (addProjectForm.attachEvent) {
  addProjectForm.attachEvent("submit", processAddProjectForm);
} else {
  addProjectForm.addEventListener("submit", processAddProjectForm);
}

const addProjectDialog = document.getElementById("add-project-dialog");
const addProjBtn = document.getElementById("addprojectbtn");
addProjBtn.addEventListener("click", () => {
  addProjectDialog.showModal();
});
const addProjCloseBtn = document.getElementById(
  "add-project-dialog-close-button"
);
addProjCloseBtn.addEventListener("click", () => {
  addProjectDialog.close();
});

refresh();

function refresh() {
  refreshProjectListing();
  const selectedProject = currentSelectedProjectName;
  const todos = getTodos(selectedProject);
  refreshTodoView(todos);
}

const addTodoDialog = document.getElementById("dialog");
const addTodoDialogCloseBtn = document.getElementById(
  "add-todo-dialog-close-button"
);
addTodoDialogCloseBtn.addEventListener("click", () => {
  hideAddTodoDialog();
});

const addTodoBtn = document.getElementById("add-todo-btn");
addTodoBtn.addEventListener("click", () => {
  showAddTodoDialog();
});

function showAddTodoDialog() {
  addTodoDialog.showModal();
}

function hideAddTodoDialog() {
  addTodoDialog.close();
}

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

  const newTodos = addNewToDoItem(
    projectName,
    title,
    desc,
    date,
    priority,
    notes
  );

  const selectedProject = currentSelectedProjectName;
  const todos = getTodos(selectedProject);
  refreshTodoView(todos);

  hideAddTodoDialog();

  return false;
}

function processAddProjectForm(e) {
  if (e.preventDefault) e.preventDefault();

  const formData = new FormData(document.querySelector("#add-project-form"));

  const projectName = formData.get("add-project-name");

  const existingProjWithName = getProject(projectName);

  if (existingProjWithName) {
    console.log(`Project with name ${projectName} exists`);
    return;
  }

  addProject(projectName);

  addProjectDialog.close();
  refreshProjectListing();
}

export { refresh };
