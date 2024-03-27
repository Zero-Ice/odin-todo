function getProjectDetailItemView(tdi) {
  const div = document.createElement("div");

  const title = document.createElement("p");
  title.innerText = tdi.title;
  div.appendChild(title);

  return div;
}

export { getProjectDetailItemView };
