/* Quiz answer checker (case-sensitive) */
function checkAnswer(correctAnswer, nextPage) {
  const ans = document.getElementById("answer").value.trim();
  const errorEl = document.getElementById("error");

  if (ans === correctAnswer) {
    window.location.href = nextPage;
  } else {
    errorEl.textContent = "That’s not correct. Try again ❤️";
  }
}

/* Slideshow for final page */
function startSlideshow() {
  let i = 0;
  const slides = document.querySelectorAll(".slideshow img");
  if (slides.length === 0) return;

  slides[0].style.display = "block";
  setInterval(() => {
    slides[i].style.display = "none";
    i = (i + 1) % slides.length;
    slides[i].style.display = "block";
  }, 3000);
}

/* Countdown for final page */
function startCountdown() {
  const countdownEl = document.getElementById("countdown");
  const targetDate = new Date("Oct 21, 2025 00:00:00").getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(timer);
      countdownEl.innerHTML = "It's your birthday today 🎉💖";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s left`;
  }, 1000);
}

/* Confetti for final page */
function startConfetti() {
  const duration = 15 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      startVelocity: 20,
      spread: 360,
      ticks: 60,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
