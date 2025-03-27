const scriptURL = 'https://script.google.com/macros/s/AKfycby7IUnLPisqQ0iE8TBX54UHfOQHhayBpaQ8ktpRl8GHp9dAoeopHHdawX680JJ6cY0k/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  const firstName = form['first-name'].value;
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      alert(`Thank you, ${firstName}! Your form has been submitted successfully. We'll contact you soon.`);
    })
    .then(() => { window.location.reload(); }) 
    .catch(error => console.error('Error!', error.message));
});
