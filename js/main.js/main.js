//=========================
// File: js/main.js
// Vintage Barbershop Project
// =========================
//-----COM Elements -------
const yearEl = document.getElementById("Year");
const menuBtn = document.getElementById("menuBtn");
const mmobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heading");

//--------Helpers / Funtions --------

// Update footer year automatically
const setCurrentYear = () => {
    const now = new Date();
    yearEl.textContent = now.getFullYear()
};

// --Toggle mobile Menu open/close
let isMenuOpen = false;
const toggleMobileMenu = () => {
    if (!mobileMenu) return;
    if (MenuOpen === false) {
        mobileMenu.classList.add("is-open");
        isMenuOpen = true;
    } else { 
        mobileMenu.classList.remove("is-open");
        isMenuOpen = false;
    }
};

// Close mobile menu (used when a link is clicked)
const closeMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
};

//Reuseable funtion with parameter (practice pattern)
const updateHeadingText = (newText) => {
    if (!heading) return;
    heading.textContent = newText;
};

// -----Event Listeners --------

// 1) Set year on page load
 setCurrentYear();

 //20 Hamburger menu Toggle
 if(menuBtn) {
menuBtn.addEventListener("click",() => toggleMobileMenu()); 
}
//3 Close mobile menu when a mobile link is clicked (event delegation)
if(mmobileMenu) {
    mobileMenu.addEventListener("click", (event) => {
        // if they clicked an <a> inside the menu, close it
        if (event.target.tagName === "A"){
            closeMobileMenu();
        }
    });
}

// 4 CTA Button: "Book Now" (Placeholder behavior)
if(ctaBtn) {
    ctaBtn.addEventListener("click", () => {
        // If you later set phoneLink href to tel:, this will work perfectly.
        // For now, this is a beginner-friendly placeholder.
        if(phoneLink) {
            updateHeadingText("call us at" + phoneLink.textContent);
        } else { 

        }
    });
}