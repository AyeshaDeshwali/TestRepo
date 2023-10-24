let textbox = document.getElementById("textbox");
textbox.addEventListener("input", function () {
  let text = this.value;
  // console.log(text);
  let char = text.length;
  document.getElementById("char").innerHTML = char;
  text = text.trim();
  let words = text.split(" ");
  let cleanList = words.filter(function (elm) {
    return elm != "";
  });
  // console.log(cleanList);
  document.getElementById("word").innerHTML = cleanList.length;
});

//   let textbox = document.getElementById("textbox");
//   textbox.addEventListener("input", function () {
//     document.getElementById("char").innerHTML = this.value.length;
//     document.getElementById("word").innerHTML = text
//       .trim()
//       .split(" ").length;
//   });
