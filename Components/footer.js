class footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer"></div>
        `;
    }
}

// Define custom element
customElements.define('footer', footer);