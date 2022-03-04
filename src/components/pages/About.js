import React from "react";

function About() {
    return (
        <div className="card mt-3 mb-5">
            <div className="card-body">
                <h2 className="text-white my-3 py-2 bg-heading text-center rounded-pill">About</h2>
                <div className="card bg-Primary-Blend">
                    <div className="card-body">
                        <blockquote className="blockquote mb-0 text-white">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere vel tortor nec euismod. Nullam tincidunt libero et tellus fermentum, eget vestibulum quam laoreet. Aliquam erat enim, efficitur quis velit eu, aliquet porta ligula. Proin tincidunt leo sit amet dolor convallis, id rhoncus neque placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ut maximus justo. Etiam blandit ultricies nisl vel mattis. Nulla est leo, tincidunt a pulvinar a, tempor eget massa. Vivamus facilisis lectus nec risus rutrum, vel suscipit risus varius. Aliquam efficitur tempor ex id ultricies. Donec eleifend vulputate risus vel interdum. Donec mollis viverra ex, id condimentum ipsum. Aenean iaculis est non elit scelerisque elementum. Phasellus et varius ex.
                            </p>
                        <footer className="blockquote-footer text-white">Footer <cite title="Source title">Source title</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
