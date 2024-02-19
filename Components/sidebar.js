class SidebarNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="sidebarContainer">

        <div class="nav">
            <ul>
                <li><strong>About</strong></li>
                <li><a href="about.html">Who Am I?</a></li>
                <li><a href="template.html">Resume/CV</a></li>
            </ul>

            <ul>
                <li><strong>Playground</strong></li>
                <li><a href="#">Web 3D Library</a></li>
                <li><a href="#">Wacky Interactions</a></li>
            </ul>

            <ul>
                <li><strong>Latest work</strong></li>
                <li><a href="#">Building UI Components</a></li>
                <li><a href="#">Assemble Design System</a></li>
                <li><a href="#">WebAdvisor</a></li>
            </ul>

            <ul>
                <li><strong>Case Studies</strong></li>
                <li><a href="#">Building Design System</a></li>
                <li><a href="#">Personas</a></li>
               

            </ul>
        </div>

        <div class="socialfooter">
            <a href="https://dribbble.com/carter29" target="_blank" rel="noopener noreferrer">
                <div class="socialicon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none"
                        xmlns:v="https://vecta.io/nano">
                        <g clip-path="url(#A)">
                            <path class="socialicon"
                                d="M9 .5a9 9 0 0 0 0 18 9 9 0 0 0 0-18zm5.906 4.356a7.48 7.48 0 0 1 1.607 4.433c-2.019-.354-3.761-.364-5.266-.126l-.588-1.275c1.614-.664 3.061-1.632 4.247-3.032zM13.87 3.781c-1.06 1.286-2.39 2.172-3.895 2.774a38.55 38.55 0 0 0-2.747-4.359 7.45 7.45 0 0 1 1.771-.213c1.858-.001 3.558.678 4.871 1.798zM5.768 2.714c.766 1.022 1.784 2.503 2.78 4.318-2.112.58-4.474.736-6.864.743.528-2.236 2.054-4.09 4.084-5.061zM1.483 9.5l.006-.243h.04c2.679 0 5.338-.175 7.723-.878l.524 1.115c-3.137.92-5.093 2.984-6.433 4.948A7.48 7.48 0 0 1 1.483 9.5zm2.955 5.969c1.269-1.911 3.037-3.802 5.915-4.597.672 1.722 1.221 3.602 1.511 5.577-.883.367-1.85.569-2.864.569a7.47 7.47 0 0 1-4.562-1.549zm8.809.231c-.308-1.804-.812-3.525-1.419-5.12 1.315-.167 2.827-.127 4.58.196-.35 2.037-1.522 3.797-3.161 4.924z" />
                        </g>
                        <defs>
                            <clipPath id="A">
                                <path fill="#fff" transform="translate(0 .5)" d="M0 0h18v18H0z" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
                <div class="socialicon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19"
                        fill="none" xmlns:v="https://vecta.io/nano">
                        <path class="socialicon"
                            d="M9.001.5L5.29.554C4.332.598 3.678.75 3.106.973c-.592.23-1.094.537-1.594 1.038S.703 3.013.473 3.604C.25 4.177.098 4.831.055 5.789L0 9.5l.054 3.71c.044.958.196 1.612.418 2.184a4.41 4.41 0 0 0 1.038 1.594c.5.501 1.002.809 1.594 1.039.573.223 1.227.374 2.185.418L9 18.5l3.71-.054c.958-.044 1.613-.195 2.185-.418.592-.23 1.093-.538 1.593-1.039s.808-1.002 1.039-1.594c.221-.572.373-1.227.418-2.184L18 9.5l-.054-3.711c-.045-.958-.197-1.612-.418-2.184-.231-.592-.538-1.094-1.039-1.594s-1.001-.808-1.594-1.038C14.321.75 13.667.598 12.709.554L8.998.5h.003zm-.807 1.622h.807l3.637.052c.877.04 1.354.187 1.671.31.42.163.719.358 1.034.673a2.79 2.79 0 0 1 .673 1.035c.123.317.27.793.31 1.671l.052 3.636-.052 3.636c-.04.878-.187 1.354-.31 1.671a2.78 2.78 0 0 1-.673 1.034c-.315.315-.614.51-1.034.673-.317.124-.793.27-1.671.31l-3.637.052c-2.403 0-2.688-.009-3.637-.052-.877-.041-1.354-.187-1.671-.31-.42-.163-.72-.358-1.035-.673a2.79 2.79 0 0 1-.673-1.034c-.123-.317-.27-.793-.31-1.671l-.052-3.637.052-3.636c.04-.877.187-1.354.31-1.671.163-.42.358-.72.673-1.035a2.79 2.79 0 0 1 1.035-.673c.317-.124.794-.27 1.671-.31l2.829-.051v.002zm5.611 1.494a1.08 1.08 0 0 0-1.08 1.08 1.08 1.08 0 0 0 2.16 0 1.08 1.08 0 0 0-1.08-1.08h0zM9.001 4.878c-2.552 0-4.622 2.069-4.622 4.622a4.62 4.62 0 1 0 9.243 0c0-2.552-2.069-4.622-4.621-4.622zm0 1.622a3 3 0 1 1 0 6 3 3 0 1 1 0-6z" />
                    </svg>
                </div>
            </a>


            <a href="https://www.linkedin.com/in/josh-carter-7668577a" target="_blank" rel="noopener noreferrer">
                <div class="socialicon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19"
                        fill="none" xmlns:v="https://vecta.io/nano">
                        <path class="socialicon" fill-rule="evenodd"
                            d="M18 18.5h-3.698v-6.299c0-1.727-.656-2.692-2.023-2.692-1.487 0-2.264 1.004-2.264 2.692V18.5H6.45v-12h3.564v1.616s1.072-1.983 3.618-1.983S18 7.688 18 10.902V18.5zM2.198 4.929C.984 4.929 0 3.937 0 2.714S.984.5 2.198.5s2.197.992 2.197 2.214-.983 2.214-2.197 2.214zM.357 18.5h3.717v-12H.357v12z" />
                    </svg>
                </div>
            </a>


        </div>
    </div>
        `;




    }


}

// Define custom element
customElements.define('sidebar-nav', SidebarNav);