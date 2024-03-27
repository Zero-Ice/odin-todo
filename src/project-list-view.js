import { addProject, getProjectsFromLocalStorage } from "./project";

import { getProjectListItemView } from "./project-list-item-view";

const container = document.getElementById("container");
let isPageActive = false;

function setProjectListPageActive(isActive) {
  isPageActive = isActive;
}

function projectListView(projects) {
  console.log(projects);

  const div = document.createElement("div");
  div.classList = "container-item";

  const addProjBtn = document.createElement("button");
  addProjBtn.innerText = "Add Project";
  addProjBtn.addEventListener("click", addProjectPopup);
  div.appendChild(addProjBtn);

  const deleteAllProjBtn = document.createElement("button");
  deleteAllProjBtn.innerText = "Delete All Projects";
  deleteAllProjBtn.addEventListener("click", deleteAllProjects);
  div.appendChild(deleteAllProjBtn);

  if (!!projects) {
    for (const p of projects) {
      div.appendChild(getProjectListItemView(p));
    }
  }

  return div;
}

function addProjectPopup() {
  let projectName = prompt("Please enter your project name");
  if (!!projectName) {
    let newProject = CreateProject(projectName);
    AddProject(newProject);
    updateProjectListPage();
  } else {
    console.log("Invalid project name");
  }
}

function deleteAllProjects() {
  localStorage.removeItem("projects");
  updateProjectListPage();
}

function updateProjectListPage() {
  if (!isPageActive) return;

  clearContainer();
  container.appendChild(projectListView(getProjectsFromLocalStorage()));
}

function clearContainer() {
  container.innerHTML = "";
}

export { projectListView, updateProjectListPage, setProjectListPageActive };
