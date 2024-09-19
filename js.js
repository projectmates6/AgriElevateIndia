// Select all elements with the 'hidden' class
const hiddenElements = document.querySelectorAll('.hidden');

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight - 100;  // Element becomes visible 100px before it enters the viewport
}

// Function to add 'visible' class to elements in the viewport
function handleScroll() {
    hiddenElements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Add event listener for scrolling
window.addEventListener('scroll', handleScroll);

// Trigger the scroll function initially in case elements are already in the viewport on page load
handleScroll();
