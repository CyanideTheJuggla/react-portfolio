import React from "react";

function Footer() {
    return (
        <footer className="position-sticky bottom-0 w-100 p-3 keep-above bg-Secondary-Side-Gradient">
            <div className="container d-flex flex-row justify-content-evenly">
                <a href="https://github.com/CyanideTheJuggla" target="_blank" className="text-white-50 text-decoration-none" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/howell-cscott/" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none">LinkedIn</a>
                <a href="/" target="_blank" rel="noreferrer" className="text-white-50 text-decoration-none">THIRD PLATFORM (DNE)</a>
            </div>
        </footer>
    );
}

export default Footer;
