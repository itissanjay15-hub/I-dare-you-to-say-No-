const music = document.getElementById("bgMusic");

function initApp() {
    document.getElementById('start-overlay').style.display = 'none';
    document.getElementById('main-card').classList.remove('hidden');
    music.play().catch(e => console.log("Music play blocked"));
}

// Countdown to Feb 3rd Midnight
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

// No Button Logic
const noBtn = document.getElementById("noBtn");
const phrases = ["Really? 😳", "Why though? 🥺", "You sure? 😢", "Pretty please! 💗", "Sadiya ❤️"];
let i = 0;

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.innerText = phrases[i++ % phrases.length];
});

// Yes Button Logic
document.getElementById("yesBtn").addEventListener("click", () => {
    document.getElementById("main-card").classList.add("hidden");
    document.getElementById("celebration").classList.remove("hidden");

    const fullText = "Yaay! I love you more than words can say.\n\nCounting every heartbeat until our special day... Happy Anniversary, my everything! ❤️";
    const el = document.getElementById("typeText");
    let index = 0;

    function type() {
        if (index < fullText.length) {
            el.innerText += fullText.charAt(index++);
            setTimeout(type, 50);
        }
    }
    type();
});
