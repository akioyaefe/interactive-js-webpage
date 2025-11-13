// ========================
// Part 1: Event Handling
// ========================

// Click event
document.getElementById("clickBtn").addEventListener("click", function() {
  alert("You clicked the button!");
});

// Mouseover event
document.getElementById("hoverText").addEventListener("mouseover", function() {
  this.style.color = "red";
});
document.getElementById("hoverText").addEventListener("mouseout", function() {
  this.style.color = "";
});

// Keyboard input event
document.getElementById("keyInput").addEventListener("input", function() {
  document.getElementById("keyOutput").textContent = "You typed: " + this.value;
});

// ========================
// Part 2: Interactive Elements
// ========================

// Light/Dark Mode Toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter Button
let count = 0;
document.getElementById("incrementBtn").addEventListener("click", function() {
  count++;
  document.getElementById("counter").textContent = count;
});

// Collapsible FAQ
const faqBtns = document.querySelectorAll(".faq-btn");
faqBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    const content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// Tabbed Interface
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    const tab = this.dataset.tab;

    tabContents.forEach(tc => tc.style.display = "none");
    document.getElementById(tab).style.display = "block";
  });
});

// ========================
// Part 3: Form Validation
// ========================

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form submission

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formMessage").textContent = "";

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let isValid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required!";
    isValid = false;
  }

  // Email validation (simple regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email!";
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters!";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("formMessage").textContent = "Form submitted successfully!";
    document.getElementById("signupForm").reset();
  }
});
