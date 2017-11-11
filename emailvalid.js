
function checkEmail() {

    var email = document.getElementsByName('txtEmail')[0];
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value) || email.value.length>50) {
      alert('Please provide a valid email address');
      email.focus;
      return false;

    } else {
      submittedEmail();
    }
 }

function submittedEmail() {
    $("#login").fadeOut();
    $("#complete").fadeIn();
}
