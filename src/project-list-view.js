import { addProject, getProjectsFromLocalStorage } from "./project";

import { getProjectListItemView } from "./project-list-item-view";

import { refreshTodoView } from "./todo-view";

import { getTodos } from "./todo";

let currentSelectedProject = "";

const container = document.getElementById("projectlisting");

function projectListView(projects) {
  console.log(projects);

  container.innerHTML = "";

  if (!!projects) {
    for (const p of projects) {
      const projectBtn = getProjectListItemView(p);
      projectBtn.addEventListener("click", () => {
        currentSelectedProject = p.name;
        console.log(`selected project ${p.name}`);
        const todos = getTodos(p.name);
        refreshTodoView(todos);
      });
      container.appendChild(projectBtn);
    }
  }
}

function refreshProjectListing() {
  const projects = getProjectsFromLocalStorage();
  if (!currentSelectedProject) {
    if (projects.length > 0) {
      currentSelectedProject = projects[0].name;
      console.log("setting default selected project");
    }
  }
  projectListView(projects);
}

function deleteAllProjects() {
  localStorage.removeItem("projects");
  updateProjectListPage();
}

export { projectListView, refreshProjectListing, currentSelectedProject };
