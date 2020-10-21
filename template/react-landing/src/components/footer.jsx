import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="inner">
                <h2>Etiam veroeros lorem</h2>
                <p>Pellentesque eleifend malesuada efficitur. Curabitur volutpat dui mi, ac imperdiet dolor tincidunt nec.
                    Ut erat lectus, dictum sit amet lectus a, aliquet rutrum mauris. Etiam nec lectus hendrerit, consectetur
                    risus viverra, iaculis orci. Phasellus eu nibh ut mi luctus auctor. Donec sit amet dolor in diam feugiat
                    venenatis. </p>

                <ul className="icons">
                    <li key='Twitter'><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                    <li key='Facebook'><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                    <li key='Instagram'><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                    <li key='Email'><a href="#" className="icon fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <p className="copyright">&copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a>. Images: <a
                        href="https://unsplash.com/">Unsplash</a>. Videos: <a href="http://coverr.co/">Coverr</a>.</p>
            </div>
        </footer>
    )
}

export default Footer;