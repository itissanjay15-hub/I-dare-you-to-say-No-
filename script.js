const music = document.getElementById("bgMusic");

function initApp() {
    document.getElementById('start-overlay').style.display = 'none';
    document.getElementById('main-card').classList.remove('hidden');
    music.play();
}

function celebrate() {
    // Hide Page 1 and Show Page 2
    document.getElementById("main-card").style.display = "none";
    document.getElementById("celebration-page").style.display = "block";
    document.getElementById("celebration-page").classList.remove('hidden');

    // Launch Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffc0cb', '#ff69b4', '#ff1493']
    });

    // Romantic Typewriter text
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
}

// Anniversary Countdown
function updateCountdown() {
    const target = new Date("February 3, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = target - now;
    const display = document.getElementById("timer-display");

    if (diff <= 0) {
        display.innerText = "HAPPY ANNIVERSARY! ❤️";
        return;
    }

    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    display.innerText = `${h}h ${m}m ${s}s`;
}
setInterval(updateCountdown, 1000);

// No Button Teleportation
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
