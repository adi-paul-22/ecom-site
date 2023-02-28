function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@admin.com" && password === "123456") {
      alert("Login successful");
    } else {
      alert("Incorrect email or password");
    }
  }