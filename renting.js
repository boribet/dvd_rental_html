
console.log(document.getElementById("submitFilmQuery"));
document.getElementById("submitFilmQuery").addEventListener("click",informSelected);
//document.getElementById("movie_categories").addEventListener("change",function() {alert(document.getElementById("movie_categories").selectedIndex)});

function informSelected() {
var x = document.getElementById("movie_categories").selectedIndex;
var y = document.getElementById("movie_categories").options;
var z = document.getElementById("txtFilmQuery");
  if (x != 0) {
    alert("You searched for: " + y[x].text);
  } else {
    alert("You searched for: " + z.value); }

}
