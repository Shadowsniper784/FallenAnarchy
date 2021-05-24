function darkmode() {
  var style = document.body.style
  style.backgroundColor = style.backgroundColor === "white" ? "black" : "white"
  document.getElementById('mode').innerHTML = style.backgroundColor === "white" ? "Dark mode" : "Light mode"
    document.getElementById('mode').style.color = style.backgroundColor === "white" ? "Black" : "White"
}