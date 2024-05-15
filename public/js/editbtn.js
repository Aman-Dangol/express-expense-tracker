export function getAllEditButtons() {
  let allbtn = document.querySelectorAll(".editBtn");

  allbtn.forEach((btn) => {
    btn.onclick = () => {
      console.log(btn);
      btn.href == "/";
    };
  });
}
