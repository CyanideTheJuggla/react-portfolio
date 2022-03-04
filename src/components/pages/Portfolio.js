import React from "react";
import Project from "../Project";
import projects from "../../data/projects.json"

function Portfolio() {
    

    return (
        <div className="container">
            <h2 className="text-white mt-3 mb-2 py-2 bg-heading text-center rounded-pill">Portfolio</h2>
            <div className="row my-1">
                {
                    projects.map((project, index) => 
                        <div className="col-4 my-2 card-fixed-height" key={index}>
                            <Project project={project} />
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Portfolio;
