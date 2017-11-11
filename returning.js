console.log(document.getElementById("submitReturnForm"));
document.getElementById("submitReturnForm").addEventListener("click",checkEmail);
document.getElementById("submitReturnForm").addEventListener("click",checkDate);

function checkEmail() {

    var email = document.getElementById('txtEmail2');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
      alert('Please provide a valid email address');
      email.focus;
      return false;

    } /*else {
      submittedEmail();
    }*/
 }

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

function submittedEmail() {
  $('button').on('click', function() {
    $("#login").fadeOut();
    $("#complete").fadeIn();
    });
}
