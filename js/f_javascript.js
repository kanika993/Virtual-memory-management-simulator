const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add 'in-view' class to sections when they are in the viewport
function checkSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('in-view');
        }
    });
}

// Check sections on scroll and load
window.addEventListener('scroll', checkSections);
window.addEventListener('load', checkSections);

const button = document.querySelector(".button");
button.addEventListener("click", (e) => {
  e.preventDefault;
  button.classList.add("animate");
  setTimeout(() => {
    button.classList.remove("animate");
  }, 600);
});



document.addEventListener("DOMContentLoaded", function() {
    const theoryItems = document.querySelectorAll('.theory-item');
    theoryItems.forEach((item, index) => {
        item.style.animation = `fadeIn 0.5s ease forwards ${index * 0.2}s`;
    });
});


function toggleExplanation(concept) {
    const explanation = document.getElementById(concept);
    
    // Toggle the display of the explanation
    if (explanation.style.display === "block") {
        explanation.style.display = "none"; // Hide explanation
    } else {
        explanation.style.display = "block"; // Show explanation
    }
}
