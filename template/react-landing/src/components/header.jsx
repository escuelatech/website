import React from 'react';

const Header = () => {
    return (
        <section id="banner" data-video="images/banner">
            <div className="inner">
                <header>
                    <h1>Escuela Technologies</h1>
                    <p>Learn technology from us<br />
                        designed by <a href="https://templated.co/">Templated</a> Browse through our videos and blog.</p>
                </header>
                <a href="#main" className="more">Learn More</a>
            </div>
        </section>
    )
}

export default Header