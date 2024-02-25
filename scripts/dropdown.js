document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown visibility on button click
    dropdownBtn.addEventListener('click', function () {
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-btn')) {
            dropdownContent.style.display = 'none';
        }
    });

    // Retrieve and apply selected theme from localStorage
    const selectedTheme = localStorage.getItem('selectedTheme');
    if (selectedTheme) {
        applyTheme(selectedTheme);
    }
});

// Function to select a theme
function selectTheme(themePath, themeName) {
    document.getElementById('selectTheme').textContent = themeName;
    document.querySelector('.dropdown-content').style.display = 'none';

    // Save and restore scroll position
    const scrollPosition = window.scrollY;
    applyTheme(themePath);
    requestAnimationFrame(() => {
        window.scrollTo(0, scrollPosition);
    });

    // Store selected theme in localStorage
    localStorage.setItem('selectedTheme', themePath);
}

// Function to apply a theme
function applyTheme(themePath) {
    const themeStylesheet = document.getElementById('theme-stylesheet');
    themeStylesheet.setAttribute('href', themePath);
}
