
function checkDate() {
  var x = new Date();
  var y = x.getFullYear();
  var m = x.getMonth();
  var d = x.getDate();
  console.log(x,y,m,d);

  var year = document.getElementById('txtYear').value;
  var month = document.getElementById('txtMonth').value;
  var date = document.getElementById('txtDay').value;
  console.log(year, month, date);
  if(year<y || year>2018){
    alert('Please provide a valid year of return');
  } else if (year==y && month-1<m) {
    alert('Please provide a valid month of return');
  } else if (year==y && month-1==m && date<d){
    alert('Please provide a valid day of return');
  }
}
