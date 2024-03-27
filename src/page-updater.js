import {
  updateProjectListPage,
  setProjectListPageActive,
} from "./project-list-view.js";

import {
  setProjectDetailPageActive,
  setCurrentProjectDetail,
  updateProjectDetailPage,
} from "./project-detail.js";

const projectNav = document.getElementById("projectnav");

projectNav.addEventListener("click", () => {
  setCurrentTab("projectnav");
});

setCurrentTab("projectnav");

function setCurrentTab(currentPage) {
  setProjectListPageActive(false);
  setProjectDetailPageActive(false);

  switch (currentPage) {
    case "projectnav":
      setProjectListPageActive(true);
      updateProjectListPage();
      break;
    case "projectdetail":
      setProjectDetailPageActive(true);
      updateProjectDetailPage();
      break;
    default:
      break;
  }
}

export { setCurrentTab };
