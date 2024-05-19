document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');
    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
        navigation.classList.toggle('open');
    });

    const darkButton = document.getElementById('darkBtn');
    const mainContent = document.querySelector('main');
    darkButton.addEventListener('click', () => {
        mainContent.classList.toggle('dark');
    });

    let visits = localStorage.getItem('visitCount') || 0;
    visits++;
    localStorage.setItem('visitCount', visits);
    document.getElementById('visitCount').textContent = visits;

    document.getElementById('confirm_password').addEventListener('input', function() {
        const password = document.getElementById('password').value;
        const confirmPassword = this.value;
        if (password !== confirmPassword) {
            this.setCustomValidity("Passwords do not match.");
        } else {
            this.setCustomValidity("");
        }
    });
});
