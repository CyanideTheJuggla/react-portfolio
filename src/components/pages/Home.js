import React from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function Home() {
    return (
        <div className="pt-2">
            <div className="card">
              <div className="card-body">
                <About />
                <Portfolio />
                <Contact />
              </div>
            </div>
        </div>
    );
}

export default Home;
