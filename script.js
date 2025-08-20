// -------- QUIZ LOGIC --------
function checkAnswer(clue) {
  const ans = document.getElementById("answer").value.trim();
  const errorEl = document.getElementById("error");

  if (clue === "clue1") {
    if (ans === "sanam teri kasam") {
      window.location.href = "clue2.html";
    } else {
      errorEl.textContent = "Nope, try again ❤️";
    }
  }

  if (clue === "clue2") {
    if (ans === "4th jan") {
      window.location.href = "clue3.html";
    } else {
      errorEl.textContent = "Nope, try again ❤️";
    }
  }

  if (clue === "clue3") {
    if (ans === "5th march") {
      window.location.href = "letter.html";
    } else {
      errorEl.textContent = "Nope, try again ❤️";
    }
  }
}

// -------- COUNTDOWN --------
function startCountdown() {
  const countdownEl = document.getElementById("countdown");
  if (!countdownEl) return;

  const targetDate = new Date("October 21, 2025 00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      countdownEl.innerHTML = "It's your Birthday 🎂❤️";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML =
      `${days}d ${hours}h ${minutes}m ${seconds}s left ❤️`;
  }, 1000);
}

// -------- CONFETTI --------
function startConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = [];
  const colors = ["#ff0a54","#ff477e","#ff7096","#ff85a1","#fbb1bd","#f9bec7"];

  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 200 + 50,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.floor(Math.random() * 10) - 10,
      speed: Math.random() * 1 + 0.3 // slower speed
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c) => {
      ctx.beginPath();
      ctx.fillStyle = c.color;
      ctx.ellipse(c.x, c.y, c.r, c.r/2, Math.PI/4, 0, 2 * Math.PI);
      ctx.fill();
    });
    update();
    requestAnimationFrame(draw);
  }

  function update() {
    confetti.forEach((c) => {
      c.y += c.speed;
      c.x += Math.sin(c.d) * 0.3;

      if (c.y > canvas.height) {
        c.x = Math.random() * canvas.width;
        c.y = -10;
      }
    });
  }

  draw();
}

// -------- TYPING EFFECT FOR LETTER --------
function typeLetter() {
  const el = document.querySelector(".letter-text");
  if (!el) return;

  const text = el.getAttribute("data-text");
  el.textContent = "";
  el.classList.add("typing");

  let i = 0;
  function typing() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 50); // typing speed
    } else {
      el.classList.remove("typing");
    }
  }
  typing();
}

// -------- INITIALIZE --------
window.onload = () => {
  startCountdown();
  startConfetti();
  typeLetter();
};
