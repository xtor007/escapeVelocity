"use strict"

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit',buttonClick);

  async function buttonClick(e) {
    e.preventDefault();
    let countError = isNorm(form);
    if (countError===0) {

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
