const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Prevent page refresh on form submission

  const formData = new FormData(event.currentTarget);
  const formObject = {};
  
  formData.forEach((value, name) => {
    formObject[name] = value;
  });

  if (formObject.email === '' || formObject.password === '') {
    alert('All fields must be filled out');
    return;
  }

 
