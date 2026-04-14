function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if(user !== "" && pass !== "") {
    alert("Login Successful!");
  } else {
    alert("Invalid Credentials");
  }
  return false;
}