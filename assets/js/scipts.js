/*** STICKY HEADER ****/
window.addEventListener('scroll', function () {
    const header = document.querySelector('#header');
    if (window.scrollY > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
});

/**** SIDENAVBAR  ***/
let isMenuActive = false;
let isBackdropActive = false;

function toggleOffCanvasMenu() {
  const menu = document.querySelector('.navbar-collapse.offcanvas');
  const backdrop = document.getElementById('menuBackdrop');

  menu.classList.toggle('show');
  backdrop.classList.toggle('show');
}

function closeCanvasMenu() {
  const menu = document.querySelector('.navbar-collapse.offcanvas');
  const backdrop = document.getElementById('menuBackdrop');

  menu.classList.remove('show');
  backdrop.classList.remove('show');
}


/*** NEWSLETTER FORM ****/
document.getElementById("newsletterForm").addEventListener("submit", function (e) {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const email = emailInput.value.trim();

  // Email regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Reset error
  emailError.textContent = "";
  emailInput.classList.remove("is-invalid");

  if (email === "") {
      e.preventDefault();
      emailError.textContent = "Email is required.";
      emailInput.classList.add("is-invalid");
  } 
  else if (!emailPattern.test(email)) {
      e.preventDefault();
      emailError.textContent = "Please enter a valid email address.";
      emailInput.classList.add("is-invalid");
  }
});