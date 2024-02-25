document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the selected theme from localStorage and apply it
    const selectedTheme = localStorage.getItem('selectedTheme');
    if (selectedTheme) {
        applyTheme(selectedTheme);
        // Apply the background color corresponding to the theme
        document.body.style.backgroundColor = getBackgroundColor(selectedTheme);
    }
});

// Function to get the background color corresponding to the theme
function getBackgroundColor(themePath) {
    // You might implement a logic here to determine the background color based on the theme
    // For example, you could use a mapping of theme paths to background colors
    // This is just a placeholder, you should replace it with your logic
    switch (themePath) {
        case 'Default-theme.css':
            return '#ffffff'; // Example background color for theme 1
        case 'dark-theme.css':
            return '#000000'; // Example background color for theme 2
        default:
            return '#000000'; // Default background color
    }
}