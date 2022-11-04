import img1 from './assets/bailey-zindel.jpg';
import img2 from './assets/mark-harpur.jpg';
import img3 from './assets/ales-krivec.jpg';
import img4 from './assets/pietro-de-grandi.jpg';
import img5 from './assets/pine-watt.jpg';
import img6 from './assets/ryan-schroeder.jpg';

const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const images = document.querySelectorAll('.imgs');
const image1 = images[0];
const image1demo = document.getElementById('1');
const image2 = images[1];
const image2demo = document.getElementById('2');
const image3 = images[2];
const image3demo = document.getElementById('3');
const image4 = images[3];
const image4demo = document.getElementById('4');
const image5 = images[4];
const image5demo = document.getElementById('5');
const image6 = images[5];
const image6demo = document.getElementById('6');

function carousel(){


    // Next / previous controls
    function plusSlides(x) {    
        console.log(x);   
        showSlides(slideIndex += x);
    }

    // Current slide
    function currentSlide(x) {
        showSlides(slideIndex = x);
    }

    // Main function
    function showSlides(n) {
        let slides = document.querySelectorAll('.slide');
        let dots = document.querySelectorAll('.demo');
        let captionText = document.querySelector('.caption');
        
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
    
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
    }

    let slideIndex = 1;
    showSlides(slideIndex);


    // Add event listeners to the buttons
    prevbtn.addEventListener('click', function(){
        plusSlides(-1)
    });
    nextbtn.addEventListener('click', function(){
        plusSlides(1)
    });

    // Set the images
    image1.src = img1;
    image1demo.src = img1;
    image1demo.addEventListener('click', function(){
        currentSlide(1)
    });

    image2.src = img2;
    image2demo.src = img2;
    image2demo.addEventListener('click', function(){
        currentSlide(2)
    });
        
    image3.src = img3;
    image3demo.src = img3;
    image3demo.addEventListener('click',  function(){
        currentSlide(3)
    });
        
    image4.src = img4;
    image4demo.src = img4;
    image4demo.addEventListener('click',  function(){
        currentSlide(4)
    });
        
    image5.src = img5;
    image5demo.src = img5;
    image5demo.addEventListener('click',  function(){
        currentSlide(5)
    });
        
    image6.src = img6;
    image6demo.src = img6;
    image6demo.addEventListener('click',  function(){
        currentSlide(6)
    });

}


export default carousel;