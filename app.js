const sections = document.querySelectorAll(".section");
const sectBtn = document.querySelectorAll(".control");
const themeButton = document.querySelector(".theme-button");

function PageTransitions() {
  // Navigation button click event
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      // Remove active class from all buttons and sections
      sectBtn.forEach((btn) => btn.classList.remove("active-btn"));
      sections.forEach((section) => section.classList.remove("active"));

      // Add active class to the clicked button and corresponding section
      this.classList.add("active-btn");
      const id = this.getAttribute("data-id");
      document.getElementById(id).classList.add("active");

      // Update the URL without refreshing the page
      history.pushState(null, null, `#${id}`);
    });
  }

  // Handle page load: check the URL and activate the corresponding section
  window.addEventListener("load", function () {
    const hash = window.location.hash.substring(1); // Get the hash value (e.g., "about")
    if (hash) {
      // Remove active class from all buttons and sections
      sectBtn.forEach((btn) => btn.classList.remove("active-btn"));
      sections.forEach((section) => section.classList.remove("active"));

      // Activate the section and button corresponding to the hash
      document.querySelector(`[data-id="${hash}"]`).classList.add("active-btn");
      document.getElementById(hash).classList.add("active");
    } else {
      // If no hash is present, default to the home section
      sectBtn[0].classList.add("active-btn"); // Assuming control-1 is the home button
      sections[0].classList.add("active"); // Assuming home is the first section
    }
  });

  // Theme toggle button click event
  if (themeButton) {
    themeButton.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }
}

// Initialize the page transitions and theme toggle
PageTransitions();
