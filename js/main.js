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
const nav = document.getElementBy("nav")

// ----Modal Elements ----
const serviceModal = document.getElementById("serviceModal");
const serviceModalOverlay = document.getElementById("serviceModalOverlay");
const serviceModalClose = document.getElementById("serviceModalClose");
const serviceModalTitle = document.getElementById("serviceModalPrice");
const serviceModalPrice = document.getElementById("serviceModalList");
const serviceModalList = document.getElementById("serviceModalList");


//------Services Data (Array of Objects------)
const  services = [
  {
    id: 1,
    title: "classic Haircut",
    image: "assets/images/features-1.jpg",
    alt: "Classic haircut",
    description: "Timeless cuts with moderb precision-tailored to your style.",
    price: 25,
    popular: true,
    details: [
      "Consultaion with your baber before the cut begins.",
      "Hair sectioning and shap-up based on preferred style.", 
      "Professional clippers, trimmers, and shears used for precission.",
      "Neckline cleanup and fininshing touches included.",
      "Light styling product applied for a clean final look.",
    ],
  },
  {
  id: 2,
    title: "Beard Trim",
    image: "assets/images/features-4.jpg",
    alt: "Beard trim",
    description: "Shape, line-up, and refine your beard for a clean finish.",
    price: 15,
    popular: false,
    details:[
      "Beard assessment and shaping based on face structure.",
      "Line-up around cheeks, jawline, and neckline.",
      "Trimmers and detail tools used for crisp edges.", 
      "Conditioning beard product may be applied for softnes.",
      "Final symetry check for a polished finish.", 
    ],
  },
  {
   id: 3,
    title: "Stright Razor Shave",
    image: "assets/images/features-3.jpg",
    alt: "Straight Razor Shave",
    description: "Hot towel, smooth shave and classic barbershop experience.",
    price: 30,
    popular: true,
    details:[
      "Hot towel prep to soften facial hair and open pores.", 
      "Premium shaving cream or lather applied to protect the skin",
      "Straight razor shave performed with careful detailing.",
      "Second hot towel may be used for comfort and cleanup.",
      "Aftershave or soothing skin product applied after service.",
    ],
   },
   {
    id: 4,
    title: "Fade & Style",
    image: "assets/images/features-2.jpg",
    alt: "Fade Haircut",
    description: "A clean fade with finishing detail for a sharp, modern look.",
    price: 35,
    popular: false,
    details:[
      "Style consultaion before clipper work begins.",
      "Fade blended to your preferred level and finish",
      "Detailing around temples, neckline, and beard area if needed.",
      "Scissors and slipper-over-the-comb may be used for texture.",
      "Styling product added to complere the final look.",
    ],
   },
   {
    id: 5,
    title: "Kids cut",
    image: "assets/images/features-1.jpg",
    alt: "Kids Haircut",
    description: "Clean, comfortable haircut service for younger clients.",
    price: 20,
    popular: false,
    details:[
        "Simple consultation with child and parent if needed.",
        "Age-appropriate haircut with comfort in mind.",
        "Careful clipper and scissor work for a clean finish.",
        "Light cleanup around the neckline and ears.",
        "Styled neatly before leavinf the chair.",
    ]
   },
   {
    id: 6,
    title: "Head Shave",
    image: "assets/images/features-3.jpg",
    alt: "Head Shave",
    description: "Smooth head shave with classic barbershop treatment.",
    price: 28,
    popular: false,
    details:[
        "Scalp prep with warm towel treatment.",
        "Protective shave product applied before razor work.",
        "Close shave performed for a smooth finish.",
        "scalp cleaned and checked for even consistency.",
        "moisturizing scalp product applied after the shave.",
    ],
   },
],

// const services = [
//   {
//     title: "Classic Haircut",
//     text: "Timeless cuts with modern precision tailored to your style.",
//     image: "assets/images/feature-1.jpg",
//   },
//   {
//     title: "Beard Trim",
//     text: "Shape and line-up your beard for a clean, sharp ginish.",
//     image: "assets/images/feature-2.jpg",
//   },
//   {
//     title: "Straight Razor Shave",
//     text: "Hot towel treatment with a smooth traditional shave.",
//     image: "assets/images/feature-3.jpg",
//   },
// ];

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
