// Expand DOM contents function for "Learn More"
const learnMoreExpand = (secImgHolder, secImg, textBlurb, imgOverlay, textFull, sectionTitle, secText) => {
    // discarded: contrast too much with gradient text
    // sectionTitle.style = "color: transparent; bottom: 13vh; "
    // sectionTitle.className += " gradient-text";
    // discarded: converted to class / toggle
    // textBlurb.style= "transition: 2s; opacity: 0; z-index: -1";
    // end discarded
    
    textBlurb.classList.toggle("text-blurb-toggle");
    secImgHolder.classList.toggle("section-image-holder-toggle");
    secImg.classList.toggle("section-image-toggle");
    imgOverlay.classList.toggle("section-image-toggle");
    secText.classList.toggle("section-text-toggle");
    textFull.classList.toggle("text-full-toggle");
    sectionTitle.classList.toggle("section-title-toggle");
}

// Learn More button event liseners
for (i = 0; i < learnMore.length; i++ ){
    learnMore[i].addEventListener('click', (e) => {
        console.log(`Learn more button clicked`);
        
        // Defines card specific DOM elements
        let textBlurb = e.target.closest('.text');
        let section = e.target.closest('section');
        let secText = section.querySelector('.section-text');
        let secImgHolder = section.querySelector('.section-image-holder');
        let secImg = section.querySelector('.section-image');
        let imgOverlay = section.querySelector('.image-overlay');
        let textFull = section.querySelector('.text-full');
        let sectionTitle = section.querySelector('.section-title');
    
        // Fires expand function to update DOM
        learnMoreExpand(secImgHolder, secImg, textBlurb, imgOverlay, textFull, sectionTitle, secText);
    })
}


// Expand DOM contents function for "Close"
const learnMoreClose = (secImgHolder, secImg, textBlurb, imgOverlay, textFull, sectionTitle) => {
    textBlurb.classList.toggle("text-blurb-toggle");
    secImgHolder.classList.toggle("section-image-holder-toggle");
    secImg.classList.toggle("section-image-toggle");
    imgOverlay.classList.toggle("section-image-toggle");
    textFull.classList.toggle("text-full-toggle");
    sectionTitle.classList.toggle("section-title-toggle");
}

// Close button event liseners
for (i = 0; i < closeLearnMore.length; i++ ){
    closeLearnMore[i].addEventListener('click', (e) => {
        console.log(`Close button clicked`);

        // Defines card specific DOM elements
        let section = e.target.closest('section');
        let textBlurb = section.querySelector('.text');
        let secImgHolder = section.querySelector('.section-image-holder');
        let secImg = section.querySelector('.section-image');
        let imgOverlay = section.querySelector('.image-overlay');
        let textFull = section.querySelector('.text-full');
        let sectionTitle = section.querySelector('.section-title');

        // Fires close function to update DOM
        learnMoreClose(secImgHolder, secImg, textBlurb, imgOverlay, textFull, sectionTitle);
    })
}
