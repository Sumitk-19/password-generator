
function generatePassword() {
    var length = document.getElementById("password-length").value;
    var uppercase = document.getElementById("uppercase").checked;
    var lowercase = document.getElementById("lowercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;

    var charset = "";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) charset += "0123456789";
    if (symbols) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    document.getElementById("password").value = password;
    document.getElementById("copy-button").style.display = "inline-block";
    document.getElementById("copy-message").style.display = "none";
}

function copyPassword() {
    var passwordText = document.getElementById("password").value;
    navigator.clipboard.writeText(passwordText).then(function() {
        document.getElementById("copy-message").style.display = "block";
    }, function() {
        alert("Failed to copy password.");
    });
}

document.getElementById("password-length").addEventListener("input", function() {
    document.getElementById("length-value").textContent = this.value;
});
    