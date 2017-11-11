console.log(document.getElementById("submitReturnForm"));
document.getElementById("submitReturnForm").addEventListener("click",checkEmail);
document.getElementById("submitReturnForm").addEventListener("click",checkDate);
/*
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
/* }

function submittedEmail() {
  $('button').on('click', function() {
    $("#login").fadeOut();
    $("#complete").fadeIn();
    });
}

*/
