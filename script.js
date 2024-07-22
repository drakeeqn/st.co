document.querySelector('.spin-btn').addEventListener('click', () => {
    const slots = document.querySelectorAll('.slot');
    slots.forEach(slot => {
        slot.textContent = getRandomSymbol();
    });
});

function getRandomSymbol() {
    const symbols = ['🍒', '🍋', '🍉', '⭐', '🍇'];
    return symbols[Math.floor(Math.random() * symbols.length)];
}