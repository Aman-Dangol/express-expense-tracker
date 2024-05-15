export const allDelelteButtons = (callback) => {
  let allExpButtons = document.querySelectorAll(".expID");

  // return new Promise((res, rej) => {
  allExpButtons.forEach((button) => {
    button.onclick = () => {
      deleteExp(button);
      callback();
    };
    // res();
    // });
  });
};

async function deleteExp(button) {
  await fetch("/delete", {
    body: JSON.stringify({
      id: button.id,
    }),
    headers: {
      "content-type": "application/json",
    },
    method: "delete",
  });
}
