function changeBG(color) {
  let ans = (document.body.style.backgroundColor = color);
  let txt = document.getElementsByClassName("text");
  if (color == "black") {
    for (let elm of txt) {
      elm.style.color = "white";
    }
  } else {
    for (let elm of txt) {
      elm.style.color = "black";
    }
  }
}
