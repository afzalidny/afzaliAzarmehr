function validate()
{
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (email == "" || password == "") {
    alert('not null');
    return false;

  }
  else if (email.length < 9 || (pattern.test(email) === false)) {
    alert('addres email not motabar');
    return false;

  }
  else if (password < 6) {
    alert('not enogh');
    return false;

  }
}
  function validated()
  {
if( validate()==true)
 return true;
  else
  return false;

 }