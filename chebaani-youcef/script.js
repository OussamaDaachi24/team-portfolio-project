'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  const currentFilterItems = document.querySelectorAll("[data-filter-item]");

  for (let i = 0; i < currentFilterItems.length; i++) {

    if (selectedValue === "all") {
      currentFilterItems[i].classList.add("active");
    } else if (currentFilterItems[i].dataset.category.toLowerCase().includes(selectedValue.toLowerCase())) {
      currentFilterItems[i].classList.add("active");
    } else {
      currentFilterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
// Add: JS-driven projects data + renderer
const projects = [
  {
    title: "Delivery app",
    category: ["Ui/Ux Design", "applications"],
    image: "./images/project101.png",
    link: "#",
    alt: "Delivery"
  },
  {
    title: "MODYON, Ultimate fashion platform",
    category: ["Ui/Ux Design", "web development"],
    image: "./images/project102.png",
    link: "#",
    alt: "orizon"
  },
  {
    title: "GymBro",
    category: ["Ui/Ux Design", "Web Development"],
    image: "./images/project-3.jpg",
    link: "https://www.figma.com/design/5L5YyFgQwYap0DpPTqVVy5/GymBro?node-id=0-1&t=db0pJDemOuOc3KFW-1",
    alt: "fundo"
  },
  {
    title: "Pharmacy Managment",
    category: "Ui/Ux Design",
    image: "./images/project103.png",
    link: "#",
    alt: "Pharmacy"
  },
  {
    title: "AsianCooks.",
    category: "Ui/Ux Design",
    image: "./images/project-5.png",
    link: "https://www.figma.com/design/YC2WlTkZFll2Pf5bhfjacW/AsianCooks?node-id=0-1&t=ofA75tmAweu1a8ui-1",
    alt: "hindi."
  },
  {
    title: "GSsport Website ",
    category: "Ui/Ux Design",
    image: "./images/project104.png",
    link: "#",
    alt: "gs"
  },
  {
    title: "Carilly",
    category: ["Ui/Ux Design", "Applications"],
    image: "./images/project105.png",
    link: "#",
    alt: "summary"
  }
];

// Function to render projects dynamically
function renderProjects() {
  const projectList = document.querySelector('.project-list');
  if (!projectList) return;
  
  projectList.innerHTML = '';
  
  projects.forEach(project => {
    // Handle multiple categories
    const categories = Array.isArray(project.category) ? project.category : [project.category];
    const categoriesString = categories.join(' ');
    
    const projectItem = document.createElement('li');
    projectItem.className = 'project-item active';
    projectItem.setAttribute('data-filter-item', '');
    projectItem.setAttribute('data-category', categoriesString);
    
    // Display the first category or join them for display
    const displayCategory = categories.length > 1 ? categories.join(' & ') : categories[0];
    
    projectItem.innerHTML = `
      <a href="${project.link}" ${project.link.startsWith('http') ? 'target="_blank"' : ''}>
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <img src="${project.image}" alt="${project.alt}" loading="lazy">
        </figure>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-category">${displayCategory.charAt(0).toUpperCase() + displayCategory.slice(1)}</p>
      </a>
    `;
    
    projectList.appendChild(projectItem);
  });
  
  // Update filterItems after rendering
  const newFilterItems = document.querySelectorAll("[data-filter-item]");
  // Replace the old filterItems NodeList with the new one
  window.filterItems = newFilterItems;
}

// Call renderProjects when the page loads
document.addEventListener('DOMContentLoaded', renderProjects);




