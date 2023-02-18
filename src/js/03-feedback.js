import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
const KEY = 'feedback-form-state';
const formData = {};
const parsedFormData = JSON.parse(localStorage.getItem(KEY));

refs.formEl.addEventListener('input', throttle(onInput, 500));
refs.formEl.addEventListener('submit', onSubmit);

populateForm();

function onInput(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(KEY, JSON.stringify(formData));
}

function populateForm() {
  refs.emailEl.value = parsedFormData ? parsedFormData.email : '';
  refs.textarea.value = parsedFormData ? parsedFormData.message : '';
}

function onSubmit(e) {
  e.preventDefault();
  console.log(parsedFormData);
  refs.formEl.reset();
  localStorage.removeItem(KEY);
}
