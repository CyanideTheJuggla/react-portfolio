import React from "react";

function About() {
    return (
        <div className="card mt-3 mb-5">
            <div className="card-body">
                <h2 className="text-white my-3 py-2 bg-heading text-center rounded-pill">About</h2>
                <div className="card bg-Primary-Blend d-flex flex-row align-items-center">
                    <img className="rounded-circle avatar m-4 border border-3 border-dark col-sm-12" src="https://avatars.githubusercontent.com/u/8226118?v=4" alt="" />
                    <div className="card-body col-sm-12 col-9">
                        <blockquote className="blockquote mb-0 text-white text-align-justify">
                            <p>
                                Scott Howell was a person in the world for a while, then he had to work. He became a cog in the wheel for a while, then he 
                                tried college. That didn't work, so he went back to being a cog in the wheel. He needed to get a job that would actually 
                                sustain him and his family, but he couldn't and had to get another cog in the wheel job just to stay afloat. Then he tried 
                                college again, but that didn't work out again, so back to being a cog in the wheel. Then he lost his cog in the wheel job
                                because the Greek economy did it's thing, so he taught himself how to program. Then he was doing well! But then he lost that 
                                job because the company hired someone who didn't want to pay him or his coworkers, so he ended up with another cog in the wheel 
                                job. Then he had another baby, and quit that job to take care of the baby and go back to college again. This time college worked!
                                But it didn't get him a job, so he went to the UNC Chapel Hill Coding Bootcamp. And that's where we are today! Hire him now to stop
                                this stupid story from continuing the same way it's gone so far!
                            </p>
                        <footer className="blockquote-footer text-white">Scott Howell <cite title="Source title">March 2020</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
