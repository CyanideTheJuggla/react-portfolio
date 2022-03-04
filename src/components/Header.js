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
            <button className="navbar-toggler hidden-lg-up" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
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

/*
<header className="position-sticky top-0 w-100 p-3 pb-0 keep-above bg-Secondary-Side-Gradient">
    <div className="row">
        <div className="col-7">
            test
        </div>
        <div className="col-5">
            <ul className="d-flex flex-row justify-content-between">
                <li className="w-50">
                    <a href="#home" onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'page-link-custom active' : 'page-link-custom'} >
                        Home
                    </a>
                </li>
                <li className="w-50">
                    <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'page-link-custom active' : 'page-link-custom'} >
                        Portfolio
                    </a>
                </li>
                <li className="w-50">
                    <a href="#about" onClick={() => handlePageChange('About')}
                    className={ (currentPage === 'About') ? 'page-link-custom active' : 'page-link-custom' } >
                        About
                    </a>
                </li>   
                <li className="w-50">
                    <a href="#contact" onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'page-link-custom active' : 'page-link-custom'} >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    </div>
</header>

*/
