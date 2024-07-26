// script.js
$(document).ready(function() {
    // Example: Smooth Scroll for internal links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // Additional interactivity can be added here
});