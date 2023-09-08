const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    window.scrollY > 0 ? 
    header.classList.add('header_scroll') :
    header.classList.remove('header_sroll');
})

const commentsStars = document.querySelectorAll('.comments__stars');

const imgAttrs = {
    'class': "comments__star-icon" ,
    'src': "src/img/star.png",
    'alt': "star icon",
}

function setAttributes(elem, attrs) {
    for (let key in attrs) {
        elem.setAttribute(key, attrs[key])
    }
};


for (let line of commentsStars) {
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('img');
        setAttributes(star, {...imgAttrs});
        line.appendChild(star)
    }
    
}

// burger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header__nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav__link').forEach(link => 
    link.addEventListener('click', (e) => {
        e.preventDefault();
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');

        const blockID = link.getAttribute('href').substring(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });  
    })
);