export const allDelelteButtons = (callback) => {
  let allExpButtons = document.querySelectorAll(".expID");

  console.log(allExpButtons);
  // return new Promise((res, rej) => {
  allExpButtons.forEach((button) => {
    button.onclick = () => {
      deleteExp(button.id);
      callback();
    };
  });
};

async function deleteExp(id) {
  fetch("/delete", {
    body: JSON.stringify({
      id: id,
    }),
    headers: {
      "content-type": "application/json",
    },
    method: "delete",
  });
}
