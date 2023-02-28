/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const lists=document.querySelector('#navbar__list');
const sections=document.querySelectorAll('section');
const frag=document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
for(const sec of sections){
    const linkList=document.createElement('a');
    const itemList=document.createElement('li');
    const idsec=sec.getAttribute('id');
    const titlesec=sec.getAttribute('data-nav');
    //adding herf,value,claas for the list attrribute
    linkList.href=idsec;
    linkList.textContent=titlesec;
    linkList.classList.add('menu__link');
    //smooth scrool
    linkList.addEventListener('click',evt=>{
        evt.preventDefault();
        sec.scrollIntoView({behavior: "smooth"});
    })
    //appending link to item and item to fragment
    itemList.appendChild(linkList);
    frag.appendChild(itemList);
}
//appending the fragment to sections
lists.appendChild(frag);


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport
const links = document.querySelectorAll("a.menu___link");
const callback = (entries) => {
let section = entries[0];
section.target.classList.remove("your-active-class");
if (section.isIntersecting) {
section.target.classList.add("your-active-class");
for(const link of links){
if(link.textContent===section.target.dataset.nav){
    link.classList.add("active-link");
}else{
    link.classList.remove("active-link");
}
}

} else {
    section.target.classList.remove("your-active-class");
}

}
const opt={
    root:null,
    rootMargin:'0px',
    threshold:0.3
}
const obs=new IntersectionObserver(callback,opt);



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
window.addEventListener('scroll', evt=>{
        sections.forEach(sec => {
            obs.observe(sec);
        });
    })
// Set sections as active


