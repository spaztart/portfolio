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
        document.getElementById('theme-stylesheet').setAttribute('href', selectedTheme);
        document.getElementById('selectTheme').textContent = getThemeNameFromPath(selectedTheme);
    }
});

function selectTheme(themePath, themeName) {
    document.getElementById('selectTheme').textContent = themeName;
    document.querySelector('.dropdown-content').style.display = 'none';

    document.getElementById('theme-stylesheet').setAttribute('href', themePath);

    localStorage.setItem('selectedTheme', themePath);
}

function getThemeNameFromPath(themePath) {
    return 'Select theme 🎨';
}
