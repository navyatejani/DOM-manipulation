document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  let valid = true;

  // Clear previous errors
  document.querySelectorAll('.error-message').forEach(el => {
    el.style.display = 'none';
    el.innerText = '';
  });

  // Name validation
  if (name.value.trim() === '') {
    setError(name, 'Name is required');
    valid = false;
  }

  // Email validation
  if (email.value.trim() === '') {
    setError(email, 'Email is required');
    valid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
    setError(email, 'Enter a valid email');
    valid = false;
  }

  // Subject validation
  if (subject.value.trim() === '') {
    setError(subject, 'Subject is required');
    valid = false;
  }

  // Message validation
  if (message.value.trim().length < 10) {
    setError(message, 'Message should be at least 10 characters');
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    this.reset(); // optional: clear form
  }
});

function setError(input, message) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector('.error-message');
  error.innerText = message;
  error.style.display = 'block';
}
