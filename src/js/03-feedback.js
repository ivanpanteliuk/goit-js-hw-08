import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('input'),
  textareaEl: document.querySelector('textarea'),
};
const KEY = 'feedback-form-state';
const formData = { email: '', message: '' };

refs.formEl.addEventListener('input', throttle(onInput, 500));
refs.formEl.addEventListener('submit', onSubmit);

populateForm();

function onInput(e) {
  formData.email = refs.emailEl.value.trim();
  formData.message = refs.textareaEl.value.trim();
  return localStorage.setItem(KEY, JSON.stringify(formData));
}

function populateForm() {
  const parsedFormData = JSON.parse(localStorage.getItem(KEY)) || {};
  refs.emailEl.value = parsedFormData.email || '';
  refs.textareaEl.value = parsedFormData.message || '';
  return parsedFormData;
}

function onSubmit(e) {
  e.preventDefault();
  console.log(populateForm());
  refs.formEl.reset();
  localStorage.removeItem(KEY);
}
