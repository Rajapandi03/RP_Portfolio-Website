$(document).ready(function() {

    // Toggle navigation menu on mobile
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Handle scroll events
    $(window).on('scroll load', function() {
        // Hide mobile menu on scroll
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Show/hide the scroll-to-top button
        if (window.scrollY > 60) {
            $('#scroll-top').addClass('active');
        } else {
            $('#scroll-top').removeClass('active');
        }
    });

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL EXPERIENCE */
    srtop.reveal('.experience .timeline', { delay: 400 });
    srtop.reveal('.experience .timeline .container', { interval: 400 });


    // Start of Tawk.to Live Chat
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
    // End of Tawk.to Live Chat


    // Disable right-click and developer tools shortcuts
// Disable right-click and developer tools shortcuts
document.onkeydown = function(e) {
    if (e.keyCode == 123) { // F12
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I
        return false;
    }
    // ... and so on
}

    // Change page title and favicon when tab is not active
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === "visible") {
            document.title = "Experience | Portfolio RAJAPANDI";
            $("#favicon").attr("href", "/assets/images/favicon.png");
        } else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });

});