import React from "react";
import Header from "./Header";
import Home from "./pages/Home";
import Portfolio from './pages/Portfolio';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from './Footer';

export default function PortfolioContainer() {

    const [currentPage, setCurrentPage] = React.useState('Home');

    const renderPage = () => {
        //console.log('currentPage', currentPage.toLowerCase())
        if (currentPage.toLowerCase().includes('home')) {
            return <Home />;
        }
        if (currentPage.toLowerCase().includes('portfolio')) {
            return <Portfolio />;
        }
        if (currentPage.toLowerCase().includes('about')) {
            return <About />;
        }
        if (currentPage.toLowerCase().includes('contact')) {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="bg-Primary-Gradient z-0">
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <span className="bg-Transparent-Image" alt="Background vector created by coolvector - www.freepik.com" ></span>
            <div className="container bg-Secondary-Gradient page-container px-4 py-1 z-1">
                {renderPage()}
            </div>
            <Footer />
        </div>
    );
}
