// Initialises intersection observers

// SECTION TITLES
// Updates the "currentSection" variable to the section name on the screen. Allows for the menu function to fade the section title when opened. 
const options = {
    root: null, // uses browser viewport
    threshold: 1 // requires 100% visibility of element
};

const sectionTitleObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        currentSection = entry.target;
        currentSectionIndex = pageIndex.indexOf(currentSection.textContent);
        
        if (entry.isIntersecting === true) {
            navIndicators[currentSectionIndex].classList.toggle("currentNav");
        } else {
            navIndicators[currentSectionIndex].classList.remove("currentNav");

        }
    });
}, options);


sectionTitles.forEach((title) => {
    sectionTitleObserver.observe(title);
})
