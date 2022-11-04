const hamburger = function() {

    const hamburgers = document.querySelectorAll('.icon');
    const closeHamburgers = document.querySelectorAll('.close-hamburger');

    const openNav = function() {
        this.nextElementSibling.style.width = '220px';
    };

    const closeNav = function() {
        this.parentElement.style.width = '0';
    };

    for (let i = 0; i < hamburgers.length; i++) {
        hamburgers[i].addEventListener('click', openNav);
    };

    for (let i = 0; i < closeHamburgers.length; i++) {
        closeHamburgers[i].addEventListener('click', closeNav);
    };
};

export default hamburger;