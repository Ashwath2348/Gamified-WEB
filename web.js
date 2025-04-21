// DOMContentLoaded - check if already signed up
window.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('isSignedUp') === 'true') {
    document.getElementById('signup')?.classList.add('hidden');
    document.getElementById('hiddenSections')?.classList.remove('hidden');
  }
});

// Signup logic
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Signup successful!");
  document.getElementById('signup')?.classList.add('hidden');
  document.getElementById('hiddenSections')?.classList.remove('hidden');
  localStorage.setItem('isSignedUp', 'true');
  window.location.href = "#login";
});

// Login validation
const loginForm = document.querySelector('#loginForm');
const loginEmail = document.querySelector('#loginEmail');
const loginPassword = document.querySelector('#loginPassword');
const loginMessage = document.querySelector('#loginMessage');

loginForm?.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = loginEmail.value;
  const password = loginPassword.value;

  if (email === '' || password === '') {
    loginMessage.textContent = 'Both fields are required!';
    loginMessage.style.color = 'red';
  } else {
    loginMessage.textContent = 'Login successful!';
    loginMessage.style.color = 'green';
    setTimeout(() => {
      window.location.href = '/dashboard.html';
    }, 2000);
  }
});

// Quiz
const submitQuizBtn = document.querySelector('#submitQuiz');
const quizResult = document.querySelector('#quizResult');
const quizAnswers = document.querySelectorAll('input[name="quiz"]');

submitQuizBtn?.addEventListener('click', function (event) {
  event.preventDefault();

  let score = 0;
  quizAnswers.forEach(answer => {
    if (answer.checked && answer.value === 'correct') {
      score += 1;
    }
  });

  quizResult.textContent = `You scored: ${score} / 1`;
  quizResult.style.color = score === 1 ? 'green' : 'orange';
});

// Chat
const chatToggle = document.querySelector('#chatToggle');
const chatBox = document.querySelector('#chatBox');
const chatMessages = document.querySelector('#chatMessages');
const chatInput = document.querySelector('#chatInput');

chatToggle?.addEventListener('click', function () {
  chatBox.style.display = (chatBox.style.display === 'block' ? 'none' : 'block');
});

chatInput?.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && chatInput.value.trim() !== '') {
    const userMessage = chatInput.value;
    chatMessages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    chatInput.value = '';

    setTimeout(() => {
      const botReply = "I'm here to help! What can I assist you with today?";
      chatMessages.innerHTML += `<p><strong>Bot:</strong> ${botReply}</p>`;
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector(this.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
