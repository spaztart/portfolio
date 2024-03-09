class HeaderNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="LogoContainer">
            <div class="menu-icon" onclick="toggleSidebar()">☰</div>
            <a href="index.html"><div class="logo">Josh.<strong>Carter</strong></div></a>
        </div>

        <div class="dropdown">
        <button class="dropdown-btn" id="selectTheme">
            Select mode
        </button>
        <div class="dropdown-content">
        <a href="#" class="dropdown-item" onclick="selectTheme('styles/themes/Default-theme.css', 'Default Theme')">Default Theme</a>
        <a href="#" class="dropdown-item" onclick="selectTheme('styles/themes/dark-theme.css', 'Dark Theme')">Dark Theme</a>
        <a href="#" class="dropdown-item" onclick="selectTheme('styles/themes/elegantbw.css', 'Elegant Noir')">Elegant Noir</a>
        <a href="#" class="dropdown-item" onclick="selectTheme('styles/themes/green.css', 'Matrix')">Matrix</a>
            <!-- Add more themes as needed -->
        </div>
    </div>
    </header>
        `;

        this.addEventListeners();
    }

    addEventListeners() {
        const menuIcon = this.querySelector('.menu-icon');
        const sidebar = document.getElementById('sidebar');

        menuIcon.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar-open');
        });

        // Add event listeners for dropdown items if needed
    }

    selectTheme(theme) {
        // Add your logic to handle theme selection
        // For example, you can update the stylesheet or dispatch a custom event
    }
}

var sidebar = document.getElementById('sidebar');

function toggleSidebar() {
    if (window.innerWidth < 768) {
        if (sidebar.style.display === '' || sidebar.style.display === 'none') {
            sidebar.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            sidebar.style.display = 'none';
            document.body.style.overflow = '';
        }
    } else {
        // Reset sidebar to default state for desktop view
        sidebar.style.display = 'block';
        document.body.style.overflow = '';
    }
}

// Reset sidebar to default state when window width crosses the threshold
window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        sidebar.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// Initial check on page load
window.addEventListener('load', function () {
    if (window.innerWidth >= 768) {
        sidebar.style.display = 'none';
        document.body.style.overflow = '';
    }
});

customElements.define('header-nav', HeaderNav);
