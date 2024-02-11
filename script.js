// Validation code for input
var email = document.forms['form']['email'];
var Password = document.forms['form']['Password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput',email_Verify);
Password.addEventListener('textInput',pass_Verify);

function validated(){
    if(email.value.length <9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(Password.value.length <6){
        Password.style.border = "1px solid red";
        pass_error.style.display = "block";
        Password.focus();
        return false;
    }
}
function email_Verify(){
    if(email.value.length >= 8){
        Password.style.border = "1px solid silver";
        pass_error.style.display = "block";
        Password.focus();
        return true;

    }
}

function pass_Verify(){
    if(Password.value.length >= 5){
        Password.style.border = "1px solid silver";
        pass_error.style.display = "block";
        Password.focus();
        return true;

    }
}