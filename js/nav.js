(function () {
    function initMobileNav() {
        var nav = document.querySelector('.main-nav');
        if (!nav) return;
        var toggle = nav.querySelector('.nav-toggle');
        if (!toggle) return;

        toggle.addEventListener('click', function (e) {
            e.stopPropagation();
            nav.classList.toggle('is-open');
            var expanded = nav.classList.contains('is-open');
            toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        });

        // Close the menu when a nav link is tapped
        nav.querySelectorAll('ul li a').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close when tapping outside the nav
        document.addEventListener('click', function (e) {
            if (!nav.contains(e.target) && nav.classList.contains('is-open')) {
                nav.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileNav);
    } else {
        initMobileNav();
    }
})();
