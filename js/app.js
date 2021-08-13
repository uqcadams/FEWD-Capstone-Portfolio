// General Learn More button selector
const learnMore = document.querySelectorAll('.text .text-btn');
const hamburger = document.querySelector('.hamburger-container');

// Learn more event listeners
const learnMoreExpand = (secImgHolder, secImg, textBlurb, imgOverlay, textFull, sectionTitle) => {
    textBlurb.style= "transition: 2s; opacity: 0; z-index: -1";
    secImgHolder.style = "width: calc(100% - 3em); background: white; clip-path: none;"
    secImg.style = "width: 30%; clip-path: none;"
    imgOverlay.style = "width: 30%; clip-path: none;"
    textFull.style = "transition: 1.5s; transition-delay: 2s; opacity: 1; z-index: 1;"
    // sectionTitle.style = "color: transparent; bottom: 13vh; "
    // sectionTitle.className += " gradient-text";
    sectionTitle.style = "bottom: 13vh; transition: 1s"
    
}
let sectionTitle;
for (i = 0; i < learnMore.length; i++ ){
    learnMore[i].addEventListener('click', (e) => {
        console.log(`Learn more button clicked`);
        
        let textBlurb = e.target.closest('.text');
    
        let section = e.target.closest('section');
        let secImgHolder = section.querySelector('.section-image-holder');
        let secImg = section.querySelector('.section-image');
        let imgOverlay = section.querySelector('.image-overlay');
        let textFull = section.querySelector('.text-full');

        sectionTitle = section.querySelector('.section-title');
    
        learnMoreExpand(secImgHolder, secImg, textBlurb, imgOverlay, textFull, sectionTitle);
    })
}

// Hamburger menu event listeners


const menu = document.querySelector('.menu');
const hamburgerTop = document.querySelector('#top');
const hamburgerMid = document.querySelector('#mid');
const hamburgerBot = document.querySelector('#bottom');
    
const openHamburgerMenu = () => {
    hamburgerTop.style = "transform: rotate(45deg);"
    hamburgerMid.style = "transform: translateX(10px); opacity: 0;"
    hamburgerBot.style = "transform: rotate(-45deg);"
    menu.style = "opacity: 1; z-index: 1000; transition: 1s;";
    
    menu.className += " open";
}
const closeHamburgerMenu = () => {
    hamburgerTop.style = "transform: rotate(0deg);"
    hamburgerMid.style = "transform: translateX(0px); opacity: 1;"
    hamburgerBot.style = "transform: rotate(0deg);"
    menu.style = "opacity: 0; z-index: -5; transition: 1s;";
    
    menu.classList.remove("open");
}

hamburger.addEventListener('click', () => {
    console.log('hamburgers go on top');
    if (!menu.matches('.open')) {
        console.log('opening now!');
        openHamburgerMenu();
    } 
    else if (menu.matches('.open')){
        console.log('closing now!');
        closeHamburgerMenu();
    }
})


