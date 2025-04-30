document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    if (username === "admin" && password === "1234") {
        message.textContent = "Login bem-sucedido!";
        message.style.color = "green";
    } else {
        message.textContent = "Usuário ou senha incorretos.";
        message.style.color = "red";
    }
});