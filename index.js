var signUpForm = document.getElementsByName('signUp')[0];

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var fname = signUpForm.fname.value;
    var lname = signUpForm.lname.value;
    var email = signUpForm.email.value;

    /* https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript */
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var password = signUpForm.password.value;

    if (fname === '') {
        document.getElementsByClassName('error')[0].innerHTML = "First Name Cannot be Empty";
        signUpForm.fname.placeholder = "";
        signUpForm.fname.style.border = "1px solid red";
        document.getElementsByClassName('error-img')[0].style.display = "initial";
    }

    if (lname === '') {
        document.getElementsByClassName('error')[1].innerHTML = "Last Name Cannot be Empty";
        signUpForm.lname.placeholder = "";
        signUpForm.lname.style.border = "1px solid red";
        document.getElementsByClassName('error-img')[1].style.display = "initial";
    }

    if (!email.match(validRegex)) {
        document.getElementsByClassName('error')[2].innerHTML = "Looks Like This is Not an Email!";
        signUpForm.email.placeholder = "";
        signUpForm.email.style.border = "1px solid red";
        document.getElementsByClassName('error-img')[2].style.display = "initial";
    }

    if (password === '') {
        document.getElementsByClassName('error')[3].innerHTML = "Looks Like This is Not an Email!";
        signUpForm.password.placeholder = "";
        signUpForm.password.style.border = "1px solid red";
        document.getElementsByClassName('error-img')[3].style.display = "initial";
    }
});