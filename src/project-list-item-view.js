import { setCurrentTab } from "./page-updater";
import { setCurrentProjectDetail } from "./project-detail";

function getProjectListItemView(project) {
  const div = document.createElement("div");
  div.className = "project-list-item-view";

  const p = document.createElement("p");
  p.innerText = project.projectName;
  div.appendChild(p);

  const controlDiv = document.createElement("div");
  controlDiv.className = "project-list-item-view-controls";

  const viewProjBtn = document.createElement("button");
  viewProjBtn.innerText = "View Project";
  viewProjBtn.classList = "project-list-item-button";
  viewProjBtn.addEventListener("click", () => {
    setCurrentProjectDetail(project.projectName);
    setCurrentTab("projectdetail");
  });
  controlDiv.appendChild(viewProjBtn);

  const deleteProjBtn = document.createElement("button");
  deleteProjBtn.innerText = "Delete Project";
  deleteProjBtn.classList = "project-list-item-button";
  controlDiv.appendChild(deleteProjBtn);

  div.appendChild(controlDiv);

  return div;
}

export { getProjectListItemView };
