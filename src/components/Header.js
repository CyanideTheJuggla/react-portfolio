import React from "react";
import pdf from "../dl/resume.pdf";

function Header({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-Secondary-Side-Gradient sticky-top py-4">
          <div className="container">
            <a href="/#home" className="navbar-brand text-white"
                onClick={() => handlePageChange('Home')}>
                    Scott Howell
            </a>
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a href="/#portfolio" onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/#about" onClick={() => handlePageChange('About')}
                    className={ (currentPage === 'About') ? 'nav-link active' : 'nav-link' } >
                        About
                    </a>
                </li>   
                <li className="nav-item">
                    <a href="/#contact" onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a href={pdf} target="_blank" className="nav-link" rel="noreferrer" >
                        Resume <span className="material-icons float-end">file_download</span>
                    </a>
                </li>
              </ul>
          </div>
        </nav>
    );
}

export default Header;
