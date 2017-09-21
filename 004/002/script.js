function validateForm(login, pass, err) {
    var login = document.getElementById(login);
    var password = document.getElementById(pass);
    var errorList = document.getElementById(err);
    var loginIsValid;

    return function (e) {
        e.preventDefault();

        if (login.value.length == 0 && password.value.length == 0) {
            errorList.innerHTML = 'Вы не заполнили поля логин и пароль';
            password.parentNode.classList = 'form-group has-error';
            login.parentNode.classList = 'form-group has-error';
        } else {
            if (login.value == 'admin') {
                login.parentNode.classList = 'form-group has-success';
                loginIsValid = true;
            } else {
                login.parentNode.classList = 'form-group has-error';
                errorList.innerHTML = 'Неверный логин или пароль';
                loginIsValid = false;
            }

            if (password.value == '12345' && loginIsValid) {
                password.parentNode.classList = 'form-group has-success';
                errorList.innerHTML = 'Вы авторизированны';
            } else {
                password.parentNode.classList = 'form-group has-error';
                errorList.innerHTML = 'Неверный логин или пароль';
            }
        }
    }
}

var button = document.getElementById('submit-btn');
var generateResult = validateForm('exampleInputLogin', 'exampleInputPassword', 'error-list');

//Example click listener
button.addEventListener(
    'click',
    generateResult,
    false);