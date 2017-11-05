
console.log(document.getElementById("submitFilmQuery"));
document.getElementById("submitFilmQuery").addEventListener("click",informSelected);
document.getElementById("movie_categories").addEventListener("change",function() {console.log(document.getElementById("movie_categories").selectedIndex)});

function informSelected() {
  var x = document.getElementById("movie_categories").selectedIndex;
  var y = document.getElementById("txtFilmQuery");
  if (x != 0) {
    alert(x.value);
  } else {
    alert(y.value);
  }
}
