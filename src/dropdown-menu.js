const dropDown = function (){
    const navs = document.querySelectorAll('.nav-dropdown-btn');

    for (let i = 0; i < navs.length; i++) {
        navs[i].addEventListener('click', function() {
            this.parentElement.classList.toggle('dropdown-closed');
        });
    };
};

export default dropDown;

