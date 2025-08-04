// ///////////////////////////////////////////
// Start: Menu Toggle Functionality

var navLinks = document.getElementById("navLinks");
var menuIcon = document.getElementById("menu-icon");
var closeIcon = document.getElementById("close-icon");

function showMenu() {
  navLinks.style.right = "0";
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
}

function hideMenu() {
  navLinks.style.right = "-200px";
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
}

// Optional: Ensure icons reset on page load
document.addEventListener("DOMContentLoaded", function () {
  hideMenu();
});

// End: Menu Toggle Functionality
// ///////////////////////////////////////////

// ///////////////////////////////////////////
// Start: Quote Rotation Functionality
const quotes = document.querySelectorAll(".quote");
let currentQuote = 0;

function rotateQuotes() {
  quotes[currentQuote].classList.remove("active");
  currentQuote = (currentQuote + 1) % quotes.length;
  quotes[currentQuote].classList.add("active");
}

// Start quote rotation every 4 seconds
setInterval(rotateQuotes, 4000);

// End: Quote Rotation Functionality
// ///////////////////////////////////////////////

// new content to introduce slide show for pictures
document.addEventListener("DOMContentLoaded", function () {
  // Image slider functionality
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const destinationOverlay = document.querySelector(".destination-overlay");

  // Destination names corresponding to each image
  const destinations = [
    "Rio De Jenero, Brazil",
    "Niagara Falls, Canada",
    "Northern Lights, Iceland",
    "Nubian Desert, Sudan",
    "Kalahari, Botswana",
  ];

  let currentSlide = 0;
  let slideInterval;

  // Function to show specific slide
  function showSlide(index) {
    // Remove active class from all slides
    slides.forEach((slide) => slide.classList.remove("active"));

    // Add active class to current slide
    slides[index].classList.add("active");

    // Update destination overlay text
    destinationOverlay.textContent = destinations[index];

    currentSlide = index;
  }

  // Function to go to next slide
  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  // Function to go to previous slide
  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  // Auto-slide functionality
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Event listeners for navigation buttons
  nextButton.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide(); // Restart auto-slide after manual navigation
  });

  prevButton.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide(); // Restart auto-slide after manual navigation
  });

  // Pause auto-slide on hover
  const sliderContainer = document.querySelector(".slider-container");
  sliderContainer.addEventListener("mouseenter", stopAutoSlide);
  sliderContainer.addEventListener("mouseleave", startAutoSlide);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    } else if (e.key === "ArrowRight") {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    }
  });

  // Touch/swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  sliderContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  sliderContainer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      stopAutoSlide();
      if (swipeDistance > 0) {
        prevSlide(); // Swipe right - go to previous
      } else {
        nextSlide(); // Swipe left - go to next
      }
      startAutoSlide();
    }
  }

  // Initialize slider
  showSlide(0);
  startAutoSlide();

  // Smooth scroll for CTA button (if needed)
  const ctaButton = document.querySelector(".cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", (e) => {
      e.preventDefault();
      // Add your CTA action here
      console.log("CTA button clicked - Unlock The Mega Explore Experience");
      // Example: scroll to a specific section or open a modal
    });
  }

  // Preload images for smoother transitions
  function preloadImages() {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }

  preloadImages();

  // Intersection Observer for animation on scroll (optional enhancement)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  const animateElements = document.querySelectorAll(
    ".feature, .content-left h2"
  );
  animateElements.forEach((el) => observer.observe(el));
});
