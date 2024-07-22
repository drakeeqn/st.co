document.addEventListener('DOMContentLoaded', () => {
    const spinButton = document.getElementById('spin-button');
    const reels = [
        document.getElementById('reel1'),
        document.getElementById('reel2'),
        document.getElementById('reel3')
    ];

    spinButton.addEventListener('click', () => {
        reels.forEach(reel => {
            reel.textContent = getRandomSymbol();
        });
    });

    function getRandomSymbol() {
        const symbols = ['🍒', '🍋', '🔔', '🍉', '⭐', '7'];
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
});