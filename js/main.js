document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scrollToTop');
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile Menu Toggle (Basic)
    const menuToggle = document.querySelector('.menu-toggle');
    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            alert('En una implementación real, esto abriría un menú lateral.');
        });
    }

    console.log("Delta Executor Scripts Guide Loaded Successfully");
});
