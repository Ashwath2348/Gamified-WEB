document.addEventListener("DOMContentLoaded", () => {
  let points = 0;
  const pointsDisplay = document.getElementById("points");
  const progressBar = document.getElementById("progressFill");
  const badgesDisplay = document.getElementById("badges");

  function updateUI() {
    pointsDisplay.textContent = points;
    const progress = Math.min(points, 100);
    progressBar.style.width = `${progress}%`;

    // Badge logic
    if (points >= 50 && !document.getElementById("badge-rookie")) {
      const badge = document.createElement("span");
      badge.id = "badge-rookie";
      badge.className = "badge";
      badge.textContent = "⭐ Rookie";
      badgesDisplay.appendChild(badge);
    }
  }

  document.getElementById("taskButton").addEventListener("click", () => {
    points += 10;
    updateUI();
  });

  updateUI(); // Initialize
});
