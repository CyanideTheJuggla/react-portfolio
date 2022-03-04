import React from "react";

function Project({project}) {
    return (
        <div className="card card-fixed-height bg-Secondary-Blend text-white">
            <div className="card-header text-center ">
                <h5>{project.name}</h5>
            </div>
            <img className="card-img-top" src={project.image} alt="Project Snapshot" />
            <div className="card-body">
                <p className="card-text">{project.description}</p>
            </div>
            <div className="card-footer d-flex flex-row justify-content-between">
                <a href={project.repo} className="text-reset text-white">
                    Repo
                </a>
                <a href={project.deployment} className="text-reset text-white">
                    Deployment
                </a>
            </div>
        </div>
    );
}

export default Project;
