document.querySelector('.cookie-consent button').addEventListener('click', function() {
    document.querySelector('.cookie-consent').style.display = 'none';
});

var modal = document.getElementById("register-modal");
var openModalButtons = [document.getElementById("open-register-modal"), document.getElementById("open-register-modal-hero")];
var closeButton = document.querySelector(".close-button");

openModalButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        modal.style.display = "block";
    });
});

closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});