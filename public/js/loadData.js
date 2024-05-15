import * as jq from "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";

export const getTableData = async () => {
  await $.ajax({
    url: "/getData",
    type: "get",
    success: (data) => {
      document.getElementById("tbody").innerHTML = data;
    },
  });
};
