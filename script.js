const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");
const hearts = document.querySelector(".hearts");

let musicStarted = false;

const phrases = [
  "Really? 😳",
  "Think again 🥺",
  "You sure? 😢",
  "Pretty please 💗",
  "Last chance 😏",
  "Sadiya ❤️"
];

let i = 0;

/* Floating hearts */
setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = (4 + Math.random() * 4) + "s";
    hearts.appendChild(h);
    setTimeout(() => h.remove(), 8000);
}, 400);

/* Start music safely */
function startMusic() {
    if (!musicStarted) {
        music.play().catch(() => {});
        musicStarted = true;
    }
}

/* Smart No button */
function moveNo() {
    startMusic();
    if (navigator.vibrate) navigator.vibrate(40);

    const yes = yesBtn.getBoundingClientRect();
    let x, y, ok;

    do {
        x = Math.random() * (innerWidth - noBtn.offsetWidth);
        y = Math.random() * (innerHeight - noBtn.offsetHeight);

        ok =
          x + noBtn.offsetWidth < yes.left - 20 ||
          x > yes.right + 20 ||
          y + noBtn.offsetHeight < yes.top - 20 ||
          y > yes.bottom + 20;
    } while (!ok);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.innerText = phrases[i++ % phrases.length];
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* Celebration */
function celebrate() {
    startMusic();
    if (navigator.vibrate) navigator.vibrate([60, 40, 60]);

    document.getElementById("main-card").classList.add("hidden");
    document.getElementById("celebration").classList.remove("hidden");

    const lines = [
      "I didn’t want to rush this…\n\n",
      "I just wanted to be sure.\n\n",
      "It’s you. Always. ❤️"
    ];

    const el = document.getElementById("typeText");
    el.innerText = "";

    let l = 0, c = 0;

    function type() {
        if (l >= lines.length) return;
        if (c < lines[l].length) {
            el.innerText += lines[l][c++];
            setTimeout(type, 45);
        } else {
            l++; c = 0;
            setTimeout(type, 700);
        }
    }

    setTimeout(type, 600);
}
