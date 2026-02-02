const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");
const hearts = document.querySelector(".hearts");

let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    music.play().catch(() => {});
    musicStarted = true;
  }
}

// Start music on first click anywhere
document.addEventListener("click", startMusic, { once: true });

/* Floating hearts */
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = (4 + Math.random() * 4) + "s";
  hearts.appendChild(h);
  setTimeout(() => h.remove(), 8000);
}, 400);

const phrases = [
  "Really? 😳",
  "Think again 🥺",
  "You sure? 😢",
  "Please? 💗",
  "Last chance 😏",
  "Sadiya ❤️"
];

let i = 0;

function moveNo() {
  startMusic(); 
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.innerText = phrases[i++ % phrases.length];
}

noBtn.addEventListener("mouseenter", moveNo);

/* Yes button logic with fixed word spacing */
yesBtn.addEventListener("click", () => {
  document.getElementById("main-card").classList.add("hidden");
  document.getElementById("celebration").classList.remove("hidden");

  // One long string ensures the spaces between words are handled correctly
  const fullText = "I didn’t want to rush this...\n\nI just wanted to be sure.\n\nIt’s you. Always. ❤️";
  const el = document.getElementById("typeText");
  el.innerText = "";
  
  let index = 0;

  function type() {
    if (index < fullText.length) {
      el.innerText += fullText.charAt(index);
      index++;
      setTimeout(type, 60); 
    }
  }

  setTimeout(type, 500);
});
