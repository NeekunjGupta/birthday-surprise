// Countdown (index.html)
const countdown = document.getElementById("countdown");
if (countdown) {
  const target = new Date("October 21, 2025 00:00:00").getTime();
  setInterval(() => {
    let now = new Date().getTime();
    let distance = target - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

// Quiz Logic (quiz.html)
const quizContainer = document.getElementById("quizContainer");
if (quizContainer) {
  let step = 0;
  const questions = [
    {q: "What was the first movie we watched together?", a: "sanam teri kasam"},
    {q: "When did we hugged first?", a: "4th jan"},
    {q: "When did we go on our first date?", a: "5th march"}
  ];

  function showQuestion() {
    quizContainer.innerHTML = `
      <p>${questions[step].q}</p>
      <input type="text" id="answerInput" />
      <button onclick="checkAnswer()">Submit</button>
    `;
  }
  window.checkAnswer = function() {
    const val = document.getElementById("answerInput").value;
    if (val === questions[step].a) {
      document.getElementById("quizMsg").innerText = "Correct! 💖";
      step++;
      if (step < questions.length) {
        showQuestion();
      } else {
        document.getElementById("toLetter").style.display = "block";
      }
    } else {
      document.getElementById("quizMsg").innerText = "Oops, try again 😅";
    }
  };
  showQuestion();
}

// Letter (letter.html) typewriter effect
const letterDiv = document.getElementById("letter");
if (letterDiv) {
  const letterText = `Hie my baby princess,

My love, it's your happy birthday in just 2 months! Omg, I am freaking excited and I am happy we both will be together on it, heheheh.  

I love you so, so, so, so, so much, baby. You are the most precious thing and the most beautiful thing that has ever happened to me, and I am glad for this day—your birthday—because on this day you came for me, just for me, on this earth.  

I miss you, baby princess.  
I love you so, so, so, so much.  

HAPPY BIRTHDAY, BABY!`;

  let i = 0;
  function typeWriter() {
    if (i < letterText.length) {
      letterDiv.innerHTML += letterText.charAt(i);
      i++;
      setTimeout(typeWriter, 40);
    }
  }
  typeWriter();
}

// Final Surprise (final.html)
const slideshow = document.getElementById("slideshow");
if (slideshow) {
  const photos = ["assets/pic1.jpg","assets/pic2.jpg","assets/pic3.jpg"];
  let idx = 0;
  setInterval(() => {
    slideshow.innerHTML = `<img src="${photos[idx]}" alt="Memory">`;
    idx = (idx+1) % photos.length;
  }, 2000);
}

// Confetti
const canvas = document.getElementById("confetti");
if (canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let pieces = [];
  for (let i=0;i<150;i++) {
    pieces.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*6+4, d:Math.random()*50});
  }
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="rgba(255,192,203,0.8)";
    pieces.forEach(p=> {
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2,true);
      ctx.fill();
    });
    update();
  }
  function update() {
    pieces.forEach(p=>{
      p.y+=1+Math.random()*3;
      if (p.y>canvas.height) {p.y=0;}
    });
  }
  setInterval(draw,30);
}
