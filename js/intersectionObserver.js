// Initialises intersection observers


// SECTION TITLES
// Updates the "currentSection" variable to the section name on the screen. Allows for the menu function to fade the section title when opened. 
const options = {
    root: null, // uses browser viewport
    threshold: 1 // requires 100% visibility of element
};

const sectionTitleObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // console.log(entry);
        currentSection = entry.target;
        currentSectionIndex = pageIndex.indexOf(currentSection.textContent);
        console.log(`Current index: ${currentSection.textContent}`);
        console.log(`Current index: ${currentSectionIndex}`);
        // navIndicators[currentSectionIndex].classList.toggle("currentNav");
    });
}, options);


sectionTitles.forEach((title) => {
    sectionTitleObserver.observe(title);
})


// NAVIGATION TABS
// take the textContent of the current title
// identify the index number of the title within the pageIndex Array
// toggle the active nav on the corresponding nav item