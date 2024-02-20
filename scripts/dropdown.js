document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', function () {
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-btn')) {
            dropdownContent.style.display = 'none';
        }
    });

    // Retrieve the selected theme from localStorage and apply it
    const selectedTheme = localStorage.getItem('selectedTheme');
    if (selectedTheme) {
        applyTheme(selectedTheme);
    }
});

function selectTheme(themePath, themeName) {
    document.getElementById('selectTheme').textContent = themeName;
    document.querySelector('.dropdown-content').style.display = 'none';

    // Save current scroll position
    const scrollPosition = window.scrollY;

    // Apply the theme immediately
    applyTheme(themePath);

    // Use requestAnimationFrame to restore scroll position after the next repaint
    requestAnimationFrame(() => {
        window.scrollTo(0, scrollPosition);
    });

    // Store the selected theme in localStorage
    localStorage.setItem('selectedTheme', themePath);
}

function applyTheme(themePath) {
    const themeStylesheet = document.getElementById('theme-stylesheet');
    themeStylesheet.setAttribute('href', themePath);
}
