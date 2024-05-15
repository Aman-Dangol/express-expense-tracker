import { getTableData } from "./loadData.js";
import { allDelelteButtons } from "./deletebtn.js";

async function start() {
  await getTableData();
  allDelelteButtons(getTableData);
}

start();
