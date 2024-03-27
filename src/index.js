import "./style.css";
import { setCurrentTab } from "./page-updater.js";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

let currentPage = "projectnav";

setCurrentTab(currentPage);
