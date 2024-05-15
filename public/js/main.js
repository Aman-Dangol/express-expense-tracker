import { getTableData } from "./loadData.js";
import { allDelelteButtons } from "./deletebtn.js";
import { getAllEditButtons } from "./editbtn.js";
async function start() {
  await getTableData();
  getAllEditButtons();
  allDelelteButtons(start);
}

start();
