function getProjectListItemView(project) {
  const btn = document.createElement("button");
  btn.classList = "projectlisting-button text";
  btn.innerText = project.name;

  return btn;
}

export { getProjectListItemView };
