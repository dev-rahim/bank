const loginSubmitButton = document.getElementById('login-submit-btn');
const userEmailFild = document.getElementById('user-email-fild');
const userPasswordFild = document.getElementById('user-password-fild');

loginSubmitButton.addEventListener('click', function () {
    // console.log('button clicked');
    if (userEmailFild.value == 'rahim@gmail.com' && userPasswordFild.value == 'rahim') {
        // console.log('valid user');
        location.href = "banking-system.html";
    }
    else {
        console.log('not valid');
    }
})