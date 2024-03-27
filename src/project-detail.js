import { getProject } from "./project";
import { getProjectDetailItemView } from "./project-detail-item-view";

const container = document.getElementById("container");
let isPageActive = false;
let currentProject = "";

function setProjectDetailPageActive(isActive) {
  isPageActive = isActive;
}

function setCurrentProjectDetail(projectName) {
  currentProject = projectName;
}

function projectDetailView() {
  const div = document.createElement("div");
  div.classList = "container-item";

  if (currentProject === null || currentProject === "") return div;

  const p = GetProject(currentProject);
  for (const tdi of p.todoList) {
    div.appendChild(getProjectDetailItemView(tdi));
  }

  return div;
}

function updateProjectDetailPage() {
  container.innerHTML = "";
  container.appendChild(projectDetailView());
}

export {
  setProjectDetailPageActive,
  setCurrentProjectDetail,
  updateProjectDetailPage,
};
