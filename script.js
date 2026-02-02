const music = document.getElementById("bgMusic");

// Array of phrases for the "No" button
const noButtonPhrases = [
    "No 🙈",
    "Really? 🥺",
    "You sure? 😢",
    "Why not? 💔",
    "Pretty please? 🥹",
    "Think again! 🤔",
    "One more chance? 💕",
    "Please? 🙏",
    "For me? 🥰",
    "Final answer? 😭"
];
let noPhraseIndex = 0;

function initApp() {
    document.getElementById('start-overlay').style.display = 'none';
    document.getElementById('main-card').classList.remove('hidden');
    
    // Play music with user interaction
    music.play().catch(error => {
        console.log("Audio play failed:", error);
        // Try again on first click
        document.addEventListener('click', function playOnClick() {
            music.play();
            document.removeEventListener('click', playOnClick);
        }, { once: true });
    });
}

function celebrate() {
    // Hide Page 1 and Show Page 2
    document.getElementById("main-card").style.display = "none";
    document.getElementById("celebration-page").style.display = "block";
    document.getElementById("celebration-page").classList.remove('hidden');

    // Launch Confetti multiple times for extra celebration!
    function launchConfetti() {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ffc0cb', '#ff69b4', '#ff1493', '#FFB6C1', '#FFC0CB']
        });
    }
    
    // Initial burst
    launchConfetti();
    
    // More confetti bursts
    setTimeout(launchConfetti, 200);
    setTimeout(launchConfetti, 400);
    setTimeout(() => {
        confetti({
            particleCount: 100,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ffc0cb', '#ff69b4', '#ff1493']
        });
    }, 600);
    setTimeout(() => {
        confetti({
            particleCount: 100,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ffc0cb', '#ff69b4', '#ff1493']
        });
    }, 600);

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

// No Button - FIXED FOR MOBILE CONSECUTIVE TOUCHES
const noBtn = document.getElementById("noBtn");
let canMove = true;

function moveNoButton(e) {
    if (!canMove) return;
    
    // Prevent default to stop any scrolling or zooming
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    // Change text
    noPhraseIndex = (noPhraseIndex + 1) % noButtonPhrases.length;
    noBtn.innerText = noButtonPhrases[noPhraseIndex];
    
    // Get button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // Calculate safe boundaries (with padding)
    const maxX = window.innerWidth - btnWidth - 20;
    const maxY = window.innerHeight - btnHeight - 20;
    
    // Generate random position
    const x = Math.max(10, Math.random() * maxX);
    const y = Math.max(10, Math.random() * maxY);
    
    // Apply position
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    
    // Brief delay to allow repositioning, then allow next move
    canMove = false;
    setTimeout(() => {
        canMove = true;
    }, 100);
}

// Desktop - mouseover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile - touchstart (this handles taps)
noBtn.addEventListener("touchstart", moveNoButton, { passive: false });

// Also handle click as backup
noBtn.addEventListener("click", moveNoButton);
