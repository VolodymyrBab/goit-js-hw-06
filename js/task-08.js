const formRef = document.querySelector('form.login-form');

formRef.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
  event.preventDefault();

  const formInput = event.currentTarget.elements;
  const email = formInput.email.value;
  const password = formInput.password.value;

  const formData = {
    email,
    password,
  };

  if (formInput.email.value.trim() !== '' && formInput.password.value.trim() !== '') {
    console.log(formData);
    event.currentTarget.reset();
  } else {
    window.alert('Все поля должны быть заполнены!')
  }
    // console.log(formData);
}
