const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const mobNavLayer = document.getElementById('#layer2');
    const navLinks = document.querySelectorAll('.nav-list li');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-onclick');
        layer2.classList.toggle('layer-burger');

        //Burger animation
        burger.classList.toggle('toggle');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else{
                link.style.animation = `navLinksFade ${6*index/7}s ease forwards`;
            }
            
        })
    });
}

navSlide();
