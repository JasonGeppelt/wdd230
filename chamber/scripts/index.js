// Utility to handle date and time information
(function() {
    const lastModifiedElement = document.getElementById('lastModified');

    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
})();

// Navigation functionality
(function() {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    if (hamButton && navigation) {
        hamButton.addEventListener('click', function() {
            this.classList.toggle('open');  // Toggling 'open' on the button itself
            navigation.classList.toggle('open');
        });
    } else {
        console.error("Hamburger menu or navigation not found!");
    }
})();