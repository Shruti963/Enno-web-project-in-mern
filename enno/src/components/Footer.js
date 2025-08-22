import "./Footer.css"
import Nav from 'react-bootstrap/Nav';
import { Link as ScrollLink } from 'react-scroll'; // ✅ Import react-scroll
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="footer">
            <section id="newseltter" className=" newseltter accent-background">
                <div className="row justify-content-center aos-init aos-animate" >
                    <div className="col-xl-10">
                        <div className="text-center">
                            <h4>Join Our Newsletter</h4>
                            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                            <button className="cta-btnn" type="button">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container footer-top">
                    <div className="row gy-4 footerr">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <a href="/" className="d-flex align-items-center">
                                <span className="sitename">eNno</span>
                            </a>
                            <div className="footer-contact pt-3">
                                <p>A108 Adam Street</p>
                                <p>New York, NY 535022</p>
                                <p className="phoneEmail mt-3">
                                    <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                                </p>
                                <p>
                                    <strong>Email:</strong> <span>info@example.com</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i>
                                    <Nav.Link as={ScrollLink} to="home" smooth={true} duration={200} offset={-70}>
                                        Home
                                    </Nav.Link></li>
                                <li><i className="bi bi-chevron-right"></i>
                                    <Nav.Link as={ScrollLink} to="about" smooth={true} duration={200} offset={-70}>
                                        About
                                    </Nav.Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Nav.Link as={ScrollLink} to="services" smooth={true} duration={200} offset={-70}>
                                    Services
                                </Nav.Link></li>
                                <li><i className="bi bi-chevron-right"></i>  <Nav.Link as={ScrollLink} to="portfolio" smooth={true} duration={200} offset={-70}>
                                    Portfolio
                                </Nav.Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <Link to="/portfolio">Web Design</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to="/portfolio">Web Development</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to="/portfolio">Product Management</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to="/portfolio">Marketing</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <h4>Follow Us</h4>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                            <div className="social-links d-flex">
                                <button type="button" className="social-btn" aria-label="Twitter">
                                    <i className="bi bi-twitter-x"></i>
                                </button>
                                <button type="button" className="social-btn" aria-label="Facebook">
                                    <i className="bi bi-facebook"></i>
                                </button>
                                <button type="button" className="social-btn" aria-label="Instagram">
                                    <i className="bi bi-instagram"></i>
                                </button>
                                <button type="button" className="social-btn" aria-label="LinkedIn">
                                    <i className="bi bi-linkedin"></i>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <hr className="container" />
            <section className="copyy">
                <div className="footer-container text-center mt-4">
                    <p>
                        © <span>Copyright</span>
                        <strong className="px-1 sitename">eNno</strong>
                        <span>All Rights Reserved</span>
                    </p>
                    <div className="credits">
                        Designed by{" "}
                        <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">
                            BootstrapMade
                        </a>{" "}
                        Distributed by{" "}
                        <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer">
                            ThemeWagon
                        </a>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Footer


