const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  let isValid = true;

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Please enter your name';
    isValid = false;
  }

  if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address';
    isValid = false;
  }

  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Please enter your message';
    isValid = false;
  }

  if (isValid) {
    console.log('Name:', nameInput.value);
    console.log('Email:', emailInput.value);
    console.log('Message:', messageInput.value);

    alert('Thank you for your message! I will get back to you soon.');

    contactForm.reset();
  }
});
