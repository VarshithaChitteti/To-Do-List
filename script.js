// Form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const error = document.getElementById('formError');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    error.textContent = 'Please fill in all fields.';
  } else if (!emailRegex.test(email)) {
    error.textContent = 'Please enter a valid email.';
  } else {
    error.textContent = '';
    alert('Form submitted successfully!');
    this.reset();
  }
});

// To-do list
function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;
  li.onclick = function () {
    this.remove();
  };
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}