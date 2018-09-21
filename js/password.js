

function checkPassword() {
    var pass = document.getElementById("pass").value;
    var passValidation = document.getElementById("passValidate").value;
    var helpText = document.getElementsByClassName("p.help")[0];
    helpText.value = "";
    if (pass === passValidation) {
        document.getElementById("helpMatch").innerText += "Entered passwords do not match! Try again.\n";
    }
    else if (pass.length() >= 8) {
        document.getElementById("helpMessage").innerText = "Entered password is too short! Enter a password longer than 8 characters.\n";
    }
    else {
        document.write("<p>Valid password</p>.");
    }
}