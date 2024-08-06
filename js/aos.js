// Define a function to initialize and handle AOS (Animate On Scroll) animations
(function(global) {
    // Function to initialize AOS
    function initializeAOS(options) {
        // Default options for AOS
        const defaultOptions = {
            offset: 120,
            delay: 0,
            duration: 400,
            easing: 'ease',
            once: false,
            // Add more default options as needed
        };

        // Merge user options with default options
        const settings = Object.assign({}, defaultOptions, options);

        // Function to handle the visibility of elements
        function handleElementVisibility() {
            const elements = document.querySelectorAll('[data-aos]');
            elements.forEach(element => {
                // Check if the element is in the viewport
                if (isElementInViewport(element)) {
                    // Apply animation classes based on settings
                    element.classList.add('aos-animate');
                }
            });
        }

        // Function to check if an element is in the viewport
        function isElementInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Event listeners to trigger animations on scroll, resize, etc.
        function setupEventListeners() {
            window.addEventListener('scroll', handleElementVisibility);
            window.addEventListener('resize', handleElementVisibility);
            document.addEventListener('DOMContentLoaded', handleElementVisibility);
        }

        // Initialize AOS
        function init() {
            handleElementVisibility();
            setupEventListeners();
        }

        // Run the initialization function
        init();
    }

    // Attach the initializeAOS function to the global object
    global.AOS = {
        init: initializeAOS
    };

})(window);

// Usage example
AOS.init({
    offset: 100,
    delay: 200,
    duration: 600,
    easing: 'ease-in-out'
});
