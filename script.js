const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");
const hearts = document.querySelector(".hearts");

let musicStarted = false;

/* Start music on first interaction (browser-safe) */
function startMusic() {
  if (!musicStarted) {
    music.play().catch(() => {});
    musicStarted = true;
  }
}

document.addEventListener("click", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });

/* Floating hearts */
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = (4 + Math.random() * 4) + "s";
  hearts.appendChild(h);
  setTimeout(() => h.remove(), 8000);
}, 400);

/* No button logic */
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
  const yesRect = yesBtn.getBoundingClientRect();
  let x, y, safe;

  do {
    x = Math.random() * (innerWidth - noBtn.offsetWidth);
    y = Math.random() * (innerHeight - noBtn.offsetHeight);

    safe =
      x + noBtn.offsetWidth < yesRect.left - 20 ||
      x > yesRect.right + 20 ||
      y + noBtn.offsetHeight < yesRect.top - 20 ||
      y > yesRect.bottom + 20;
  } while (!safe);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.innerText = phrases[i++ % phrases.length];
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* Yes button */
yesBtn.addEventListener("click", () => {
  document.getElementById("main-card").classList.add("hidden");
  document.getElementById("celebration").classList.remove("hidden");

  const lines = [
    "I didn’t want to rush this...\n\n",
    "I just wanted to be sure.\n\n",
    "It’s you. Always. ❤️"
  ];

  const el = document.getElementById("typeText");
  el.innerText = "";

  let line = 0, char = 0;

  function type() {
    if (line >= lines.length) return;
    if (char < lines[line].length) {
      el.innerText += lines[line][char++];
      setTimeout(type, 45);
    } else {
      line++;
      char = 0;
      setTimeout(type, 700);
    }
  }

  setTimeout(type, 600);
});
