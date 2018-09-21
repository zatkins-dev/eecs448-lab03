

function checkPassword() {
    var pass = document.getElementById("pass").value;
    var passValidation = document.getElementById("passValidate").value;
    var helpText = document.getElementById("help");
    helpText.innerText = "";
    if (pass !== passValidation) {
        helpText.innerText = "Entered passwords do not match! Try again.";
        helpText.style.color = "red";
    }
    else if (pass.length < 8) {
        helpText.innerText = "Entered password is too short! Enter a password longer than 8 characters.";
        helpText.style.color = "red";
    }
    else {
        helpText.innerText = "Valid Password!";
        helpText.style.color = "green";
    }
}