import './style.css';

const navs = document.querySelectorAll('.nav-btn');

for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener('click', function() {
        this.parentElement.classList.toggle('closed');
    });
}

