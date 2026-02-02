const music = document.getElementById("bgMusic");

function initApp() {
    document.getElementById('start-overlay').style.display = 'none';
    document.getElementById('main-card').classList.remove('hidden');
    music.play();
}

// Countdown Logic
function updateCountdown() {
    const target = new Date("February 3, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
        document.getElementById("timer-display").innerText = "HAPPY ANNIVERSARY! ❤️";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("timer-display").innerText = `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(updateCountdown, 1000);

// "No" Button Teleportation
const noBtn = document.getElementById("noBtn");
const phrases = ["Really? 😳", "Think again 🥺", "You sure? 😢", "Sadiya, please! ❤️"];
let i = 0;

noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.innerText = phrases[i++ % phrases.length];
});

// "Yes" Button Celebration
document.getElementById("yesBtn").addEventListener("click", () => {
    document.getElementById("main-card").classList.add("hidden");
    document.getElementById("celebration").classList.remove("hidden");

    const fullText = "Yaay! I’m so lucky to have you. ❤️\n\nHappy Anniversary, Sadiya! I'm counting down every second until our special day.";
    const el = document.getElementById("typeText");
    let index = 0;

    function type() {
        if (index < fullText.length) {
            el.innerText += fullText.charAt(index++);
            setTimeout(type, 60);
        }
    }
    type();
});
