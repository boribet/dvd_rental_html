console.log(document.getElementById("submit"));
document.getElementById("submit").addEventListener("click", checkEmail);


function checkEmail() {

    var email = document.getElementById('txtEmail');
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
  $('button').on('click', function() {
    $("#login").fadeOut();
    $("#complete").fadeIn();
    });
}
