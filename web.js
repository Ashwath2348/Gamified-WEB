// DOM Elements
const loginForm = document.querySelector('#loginForm');
const loginEmail = document.querySelector('#loginEmail');
const loginPassword = document.querySelector('#loginPassword');
const loginMessage = document.querySelector('#loginMessage');

const quizForm = document.querySelector('#quizForm');
const quizResult = document.querySelector('#quizResult');
const quizAnswers = document.querySelectorAll('input[name="quiz"]');
const submitQuizBtn = document.querySelector('#submitQuiz');

const chatBox = document.querySelector('#chatBox');
const chatToggle = document.querySelector('#chatToggle');
const chatMessages = document.querySelector('#chatMessages');
const chatInput = document.querySelector('#chatInput');

// Login form validation
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = loginEmail.value;
    const password = loginPassword.value;

    // Simple validation
    if (email === '' || password === '') {
        loginMessage.textContent = 'Both fields are required!';
        loginMessage.style.color = 'red';
    } else {
        loginMessage.textContent = 'Login successful!';
        loginMessage.style.color = 'green';

        // Simulate redirect (In a real app, you would use window.location.href)
        setTimeout(() => {
            window.location.href = '/dashboard.html'; // Example redirect
        }, 2000);
    }
});

// Quiz form submission
submitQuizBtn.addEventListener('click', function(event) {
    event.preventDefault();

    let score = 0;

    quizAnswers.forEach(answer => {
        if (answer.checked && answer.value === 'correct') {
            score += 1;
        }
    });

    quizResult.textContent = `You scored: ${score} / ${quizAnswers.length}`;
    quizResult.style.color = score === quizAnswers.length ? 'green' : 'orange';
});

// Chatbot toggle functionality
chatToggle.addEventListener('click', function() {
    chatBox.style.display = (chatBox.style.display === 'block' ? 'none' : 'block');
});

// Simulate chat messages
chatInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && chatInput.value !== '') {
        const userMessage = chatInput.value;
        chatMessages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
        chatInput.value = '';

        // Simulate a chatbot reply
        setTimeout(() => {
            const botReply = "I'm here to help! What can I assist you with today?";
            chatMessages.innerHTML += `<p><strong>Bot:</strong> ${botReply}</p>`;
            chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
        }, 1000);
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
