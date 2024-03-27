function Project() {
  this.name = "";
}

function createProject(projectName) {
  let p = new Project();
  p.name = projectName;

  return p;
}

function getProjectsFromLocalStorage() {
  let projects = localStorage.getItem("projects");

  if (projects) {
    console.log("Found projects in storage");
    return JSON.parse(projects);
  } else {
    return null;
  }
}

function getProject(projectName) {
  const projects = getProjectsFromLocalStorage();
  const project = projects.find((p) => p.name === projectName);

  return project;
}

function existsProject(projects, projectName) {
  const project = projects.find((p) => p.name === projectName);

  if (project) return true;

  return false;
}

function saveProjects(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function addProject(newProjName) {
  const projects = getProjectsFromLocalStorage();
  if (projects == null) return false;

  const existsSameName = existsProject(projects, newProjName);

  if (existsSameName) {
    console.log("Project with same name exists");
    return false;
  }

  const newProject = createProject(newProjName);

  projects.push(newProject);

  saveProjects(projects);
}

export { Project, getProjectsFromLocalStorage, getProject, addProject };
