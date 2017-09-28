//Only for correct browsers =)
window.addEventListener("load", validate, false);

function validate() {

    for (var i=0; i < document.forms.length; i++) {
        var form = document.forms[i];

        var formValidation = false;

        for (var j = 0; j < form.elements.length; j++) {
            var e = form.elements[j];

            if (e.type != "text" && e.type != "password" && e.type != "email") {
                continue;
            }

            var pattern = e.getAttribute("data-val");

            if (pattern) {
                e.onchange = validateInput;
                formValidation = true;
            }
        }
        if (formValidation) {
            form.onsubmit = validateForm;
        }
    }
}

function validateInput() {
    var pattern = this.dataset.val,
        msg = this.dataset.valMsg,
        msgId = this.dataset.valMsgId,
        value = this.value;

    var res = value.search(pattern);
    if (res == -1) {
        document.getElementById(msgId).innerHTML = msg;
        this.setAttribute('class', 'form-control error');
        this.dataset.validationError = 'true';
        this.parentNode.classList = 'form-group has-error';
    } else {
        document.getElementById(msgId).innerHTML = '';
        this.setAttribute('class', 'form-control success');
        this.dataset.validationError = 'false';
        this.parentNode.classList = 'form-group has-success';
    }
}

function validateForm() {

    var invalid = false;

    for (var i = 0; i < this.elements.length; ++i) {
        var e = this.elements[i];
        if ((e.type == 'text' || e.type == 'password' || e.type == 'email') && e.onchange != null) {
            e.onchange();
            if (e.dataset.validationError == 'true') {
                invalid = true;
            }
        }
    }

    if (invalid) {
        return false;
    }
}