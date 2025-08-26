document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  let fullname = document.getElementById("fullname").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;
  let sub = document.getElementById("sub");


  if (password !== confirm) {
    sub.style.color = "red";
    sub.textContent = "Passwords do not match!";
    return;
  }


  sub.style.color = "green";
  sub.textContent = `Registration successful! Welcome, ${fullname}.`;


  document.getElementById("registrationForm").reset();
});
