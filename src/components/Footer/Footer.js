import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer class="mainfooter" role="contentinfo">
        <div class="footer-middle">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6">

                        <div class="footer-pad">
                            <ul class="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="/dashboard">Resume</a></li>
                                <li><a href="/login">Contact me</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-sm-6">

                        <div class="footer-pad">
                            <ul class="list-unstyled">
                                <li><a href="#"> <i i style={{marginRight:'5px'}} class="fas fa-envelope-square"></i> Email: dasavijit.aiub@gmail.com</a></li>
                                <li><a href="#"> <i style={{marginRight:'5px'}}class="fas fa-phone-alt"></i>Phone: +1(347)-665-5348</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h4>Let's Talk..</h4>
                        <ul class="social-network social-circle">
                            <li><a target="_blank" href="https://www.facebook.com/avijitdas.ovi/" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/avijit-das94/" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                            <li><a target="_blank" href="https://github.com/Avijit7102" class="icoGitHub" title="GitHub"><i class="fab fa-github"></i></a></li>

                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 copy">
                        <p class="text-center">&copy; Copyright {new Date().getFullYear()} - @avijitdas ---- All rights reserved.</p>
                    </div>
                </div>


            </div>
        </div>
    </footer>
    );
};

export default Footer;