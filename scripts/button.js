// Create a class for the button component
class MyButton extends HTMLElement {
    constructor() {
        super();

        // Create a shadow DOM for encapsulation
        this.attachShadow({ mode: 'open' });

        // Create a button element
        const button = document.createElement('button');
        button.textContent = this.getAttribute('label') || 'Click Me';

        // Append the button to the shadow DOM
        this.shadowRoot.appendChild(button);
    }
}

// Define the custom element 'my-button' using the class 'MyButton'
customElements.define('my-button', MyButton);
