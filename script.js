function celebrate() {
    startMusic();
    if (navigator.vibrate) navigator.vibrate([60, 40, 60]);

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
            el.innerText += lines[line][char];
            char++;
            setTimeout(type, 45);
        } else {
            line++;
            char = 0;
            setTimeout(type, 700);
        }
    }

    setTimeout(type, 600);
}
