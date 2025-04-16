<script>
// ===========================
// Quiz Functionality
// ===========================
document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Define correct answers
  const correctAnswers = { q1: 'a' };
  const userAnswer = document.querySelector('input[name="q1"]:checked');
  let score = 0;

  if (userAnswer && userAnswer.value === correctAnswers.q1) {
    score++;
  }

  document.getElementById('quizResult').textContent = `You scored ${score} out of 1.`;
});

// ===========================
// Chatbot Functionality
// ===========================
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');

chatInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && chatInput.value.trim() !== '') {
    const userMessage = document.createElement('div');
    userMessage.textContent = '👤 ' + chatInput.value;
    userMessage.classList = 'text-right mb-2';
    chatMessages.appendChild(userMessage);

    // Scroll to latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Fake bot response
    const botMessage = document.createElement('div');
    botMessage.textContent = '🤖 Thanks! Let me process that...';
    botMessage.classList = 'text-left text-gray-600 mb-4';
    chatMessages.appendChild(botMessage);

    // Clear input
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});

// ===========================
// Optional: Floating Chat Toggle
// ===========================
const chatToggleBtn = document.getElementById('chatToggle');
const chatBox = document.getElementById('chatBox');

if (chatToggleBtn && chatBox) {
  chatToggleBtn.addEventListener('click', () => {
    chatBox.style.display = chatBox.style.display === 'none' || chatBox.style.display === '' ? 'block' : 'none';
  });
}
</script>
