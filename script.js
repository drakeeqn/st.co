
// Modal handling
var modals = document.getElementsByClassName('modal');
var btns = document.querySelectorAll('[data-toggle="modal"]');
var spans = document.getElementsByClassName("close");

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        document.querySelector(btns[i].dataset.target).style.display = "block";
    }
}

for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        for (let j = 0; j < modals.length; j++) {
            modals[j].style.display = "none";
        }
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        for (let i = 0; i < modals.length; i++) {
            modals[i].style.display = "none";
        }
    }
}
