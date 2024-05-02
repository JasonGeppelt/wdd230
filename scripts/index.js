// Utility to handle date and time information
(function() {
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

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

// Dark mode toggle
(function() {
    const darkButton = document.querySelector('#darkBtn');
    const main = document.querySelector('main'); // Select the main section

    if (darkButton && main) {
        darkButton.addEventListener('click', () => {
            main.classList.toggle('dark');
        });
    } else {
        console.error("Dark mode toggle or main section not found!");
    }
})();


