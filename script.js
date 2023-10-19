const btn = document.getElementsByClassName("btn");
function randomColor() {
  let n = "0123456789ABCDEF";
  let cons = "#";
  for (let i = 0; i < 6; i++) {
    cons = cons + n[Math.floor(Math.random() * 16)];
  }
  return cons;
}
function randomColorChanger() {
  document.body.style.backgroundColor = randomColor();
}
btn[0].addEventListener("click", randomColorChanger);
