$(document).ready(function () {
  // Smooth scroll and navbar effects
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
    
    // Reveal animations for sections
    $('.section').each(function() {
      let position = $(this).offset().top;
      let scrollPosition = $(window).scrollTop();
      
      if (position < scrollPosition + 600) {
        $(this).addClass('visible');
      }
    });
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
    
    // Close mobile menu when item clicked
    $(".navbar .menu").removeClass("active");
    $(".menu-btn i").removeClass("active");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Expanded typing text animation
  var typed = new Typed(".typing", {
    strings: [
      "Full-Stack Developer", 
      "Web Designer", 
      "UI/UX Enthusiast", 
      "Problem Solver"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Full-Stack Developer", 
      "Problem Solver"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // Enhanced carousel with better timing
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
  
  // Skills animation
  $('.skills-images').each(function(i) {
    setTimeout(function() {
      $('.skills-images').eq(i).addClass('animate');
    }, 150 * i);
  });
});

// Resume download and view function
function downloadAndView() {
  const url = 'images/AayushPandey-Resume.pdf';
  window.open(url, '_blank'); // Opens the file in a new tab for viewing

  // Create a hidden link element for download
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Aayush_Pandey_Resume';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Form submission with better feedback
const scriptURL = 'https://script.google.com/macros/s/AKfycbymdh2OG1KAX5N927dnYrUc91_wlXnKgTLt4wL_VVy4NFZMrGvJ03XzKrcYq3n8KHPmfA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  msg.innerText = "Sending message...";
  msg.style.color = "#2196F3";

  fetch(scriptURL, { 
    method: 'POST', 
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, 
    body: new URLSearchParams(new FormData(form)).toString()
  })
  .then(response => response.json())  // Convert response to JSON
  .then(data => {
      if (data.status === "success") {
          msg.innerText = "Message Sent Successfully!";
          msg.style.color = "#4CAF50";
          form.reset();
      } else {
          msg.innerText = "Something went wrong!";
          msg.style.color = "#F44336";
      }
      setTimeout(() => msg.innerText = "", 5000);
  })
  .catch(error => {
      msg.innerText = "Error: " + error.message;
      msg.style.color = "#F44336";
      console.error('Error!', error);
  });
});


// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.querySelector('body');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isDark = body.classList.contains('light-theme');
    localStorage.setItem('darkTheme', !isDark);
  });
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('darkTheme');
  if (savedTheme === 'true') {
    body.classList.remove('light-theme');
  } else if (savedTheme === 'false') {
    body.classList.add('light-theme');
  }
}