//=========================
// File: js/main.js
// Vintage Barbershop Project
// =========================
//-----DOM Elements -------
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mmobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");
const featureGrid = document.getElementById("featureGrid");

//------Services Data (Array of Objects------)

const services = [
  {
    title: "Classic Haircut",
    text: "Timeless cuts with modern precision tailored to your style.",
    image: "assets/images/feature-1.jpg",
  },
  {
    title: "Beard Trim",
    text: "Shape and line-up your beard for a clean, sharp ginish.",
    image: "assets/images/feature-2.jpg",
  },
  {
    title: "Straight Razor Shave",
    text: "Hot towel treatment with a smooth traditional shave.",
    image: "assets/images/feature-3.jpg",
  },
];

//--------------Render Features using forEach-------------//

// const renderFeatures = () => {
//     if (!featureGrid) return;

//     services.forEach(service => {
//         const card = document.createElement("article");
//         card.classList.add("feature-card");

//         card.innerHTML = `
//         <img src="${service.image}" alt="${service.title}" class="feature-img" />
//         <h3 class= "feature-title">${service.title}</h3>
//         <p class="features-text">${service.text}</p>
//         `;

//         featureGrid.appendChild(card);
//     });

// };

//--------------Render Features using map and join-------------//
const renderFeaturesMap = () => {
  const cardsHTML = services
    .map((service) => {
      return `
        <article class="feature-card">
            <img src="${service.image}" alt="${service.title}" class="feature-img"/>
            <h3 class="feature-title">${service.title}</h3>
            <p class="feature-text">${service.text}</p>
        </article>
        `;
    })
    .join("");

  featureGrid.innerHTML = cardsHTML;
};

//--------Helpers / Funtions --------

// Update footer year automatically
const setCurrentYear = () => {
  const now = new Date();
  yearEl.textContent = now.getFullYear();
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
//  renderFeatures();
renderFeaturesMap();

//2 Hamburger menu Toggle
if (menuBtn) {
  menuBtn.addEventListener("click", () => toggleMobileMenu());
}
//3 Close mobile menu when a mobile link is clicked (event delegation)
if (mmobileMenu) {
  mobileMenu.addEventListener("click", (event) => {
    // if they clicked an <a> inside the menu, close it
    if (event.target.tagName === "A") {
      closeMobileMenu();
    }
  });
}

// 4 CTA Button: "Book Now" (Placeholder behavior)
if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    // If you later set phoneLink href to tel:, this will work perfectly.
    // For now, this is a beginner-friendly placeholder.
    if (phoneLink) {
      updateHeadingText("Booking coming next - great choice!");
    } else {
    }
  });

  // 5) Call Button: try to use the phone number in the footer
  if (callBtn) {
    callBtn.addEventListener("click", () => {
      // If you later set phoneLink href to tel:, this will work perfectly.
      // For now, this is a beginner-friendly placeholder.
      if (phoneLink) {
        updateHeadingText("Call us at " + phoneLink.textContent);
      } else {
        updateHeadingText("Call feature coming next!");
      }
    });
  }
}
