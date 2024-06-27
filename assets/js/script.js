"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

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
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

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

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

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
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category.toLowerCase()) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

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










// Get references to the video player elements
const videoPlayerContainer = document.getElementById("video-player-container");
const videoIframe = document.getElementById("video-iframe");
const videoPlayerCloseBtn = document.getElementById("video-player-close-btn");

// Function to show the video player with the specified video URL
const showVideoPlayer = (videoUrl) => {
  // Format the video URL for embedding
  const videoId = videoUrl.split('v=')[1]?.split('&')[0];
  if (videoId) {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    videoIframe.src = embedUrl;
    videoPlayerContainer.style.display = "flex";
  }
};

// Function to close the video player
const closeVideoPlayer = () => {
  videoIframe.src = "";
  videoPlayerContainer.style.display = "none";
};

// Add click event listener to the close button
videoPlayerCloseBtn.addEventListener("click", closeVideoPlayer);

// Modify the project item click event to show the video player or open a new window
document.querySelectorAll(".project-item a").forEach(item => {
  item.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior
    const videoUrl = item.href;
    if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
      showVideoPlayer(videoUrl);
    } else {
      window.open(videoUrl, "_blank"); // Open the link in a new window
    }
  });
});




//ImageDemonstrator

// JavaScript to handle image modal functionality
document.addEventListener("DOMContentLoaded", function () {
  const blogPostImages = document.querySelectorAll(".blog-post-image");

  blogPostImages.forEach(image => {
    image.addEventListener("click", function () {
      const imageUrl = image.src;
      openImageModal(imageUrl);
    });
  });

  function openImageModal(imageUrl) {
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("image-modal-container");

    const modalContent = `
      <div class="image-modal">
        <span class="close-modal">&times;</span>
        <img src="${imageUrl}" alt="Full Size Image" class="modal-image">
        <button class="close-modal-btn">Close</button>
      </div>
    `;

    modalContainer.innerHTML = modalContent;
    document.body.appendChild(modalContainer);

    const closeModal = modalContainer.querySelector(".close-modal, .close-modal-btn");
    closeModal.addEventListener("click", function () {
      document.body.removeChild(modalContainer);
    });
  }
});
