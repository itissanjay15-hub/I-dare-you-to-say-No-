* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffe6ee;
    overflow: hidden;
}

/* Card */
.container {
    background: white;
    padding: 26px 22px 32px;
    border-radius: 20px;
    text-align: center;
    width: 90%;
    max-width: 380px;
    box-shadow: 0 20px 45px rgba(0,0,0,0.18);
    animation: popIn 0.6s ease;
}

.hidden {
    display: none;
}

.bear-gif {
    width: 160px;
    margin-bottom: 18px;
}

h1 {
    font-size: 1.4rem;
    margin-bottom: 22px;
    color: #333;
}

.type-text {
    font-size: 1.15rem;
    color: #444;
    line-height: 1.7;
    white-space: pre-line;
}

/* Buttons */
.buttons {
    display: flex;
    justify-content: center;
    gap: 18px;
}

button {
    padding: 10px 26px;
    border: none;
    border-radius: 999px;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.25s ease;
}

#yesBtn {
    background: #ff5c8a;
    color: white;
}

#yesBtn:hover {
    transform: scale(1.08);
}

#noBtn {
    background: #e0e0e0;
}

/* Animations */
@keyframes popIn {
    from { transform: scale(0.85); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

/* Floating hearts */
.hearts {
    position: fixed;
    inset: 0;
    z-index: -1;
}

.heart {
    position: absolute;
    bottom: -20px;
    width: 14px;
    height: 14px;
    background: rgba(255, 92, 138, 0.25);
    transform: rotate(45deg);
    animation: floatUp linear infinite;
}

.heart::before,
.heart::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    background: inherit;
    border-radius: 50%;
}

.heart::before { top: -7px; }
.heart::after { left: -7px; }

@keyframes floatUp {
    from { transform: translateY(0) rotate(45deg); opacity: 1; }
    to { transform: translateY(-120vh) rotate(45deg); opacity: 0; }
}
