import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('input'),
  textareaEl: document.querySelector('textarea'),
};
const KEY = 'feedback-form-state';
const formData = { email: '', message: '' };
const parsedFormData = JSON.parse(localStorage.getItem(KEY)) || {};

refs.formEl.addEventListener('input', throttle(onInput, 500));
refs.formEl.addEventListener('submit', onSubmit);

populateForm();

function onInput(e) {
  formData.email = refs.emailEl.value;
  formData.message = refs.textareaEl.value;
  localStorage.setItem(KEY, JSON.stringify(formData));
}

function populateForm() {
  if (parsedFormData.email) {
    refs.emailEl.value = parsedFormData.email;
  }
  if (parsedFormData.message) {
    refs.textareaEl.value = parsedFormData.message;
  }
}

function onSubmit(e) {
  e.preventDefault();
  console.log(formData);
  refs.formEl.reset();
  localStorage.removeItem(KEY);
}
