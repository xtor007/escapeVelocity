"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit',buttonClick);

  async function buttonClick(e) {
    e.preventDefault();
    let countError = isNorm(form);
    let formData = new FormData(form);
    if (countError===0) {
      form.classList.add('_sending');
      let response = await fetch('send.php'), {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        let result = await response.json();
        form.reset();
        form.classList.remove('_sending');
      } else {
        let email = document.querySelectorAll('._email');
        addError(email[0]);
        form.classList.remove('_sending');
      }
    }
  }

  function isNorm(form) {
    let countError = 0;
    let formReq = document.querySelectorAll('._req');
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      remError(input);
      if (input.classList.contains('_email')) {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)) {
          addError(input);
          countError++;
        }
      } else if (input.classList.contains('_name')) {
        if (input.value === '') {
          addError(input);
          countError++;
        }
      }
    }
    return countError;
  }

  function addError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function remError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
});
