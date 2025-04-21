// Quiz logic
const quizForm = document.querySelector('#quizForm');
const quizResult = document.querySelector('#quizResult');
const quizAnswers = document.querySelectorAll('input[name="quiz"]');
const submitQuizBtn = document.querySelector('#submitQuiz');

submitQuizBtn.addEventListener('click', function(event) {
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

// Chatbot logic
const chatBox = document.querySelector('#chatBox');
const chatToggle = document.querySelector('#chatToggle');
const chatMessages = document.querySelector('#chatMessages');
const chatInput = document.querySelector('#chatInput');

chatToggle.addEventListener('click', function () {
  chatBox.classList.toggle('hidden');
});

chatInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && chatInput.value !== '') {
    const userMessage = chatInput.value;
    chatMessages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    chatInput.value = '';

    setTimeout(() => {
      const botReply = "I'm here to help! Ask me anything about HTML.";
      chatMessages.innerHTML += `<p><strong>Bot:</strong> ${botReply}</p>`;
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }
});
