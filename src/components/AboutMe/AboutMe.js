import React from 'react';
import pic from '../../images/avi.jpg';
import Footer from '../Footer/Footer';
import './AboutMe.css';
const AboutMe = () => {
    return (
        <div style={{ backgroundColor: '#0E0C0A', color: 'white' }}>
            <h4 className="pt-5" style={{ marginLeft: '100px', color: 'white' }}>About me</h4>
            <p style={{ marginLeft: '100px' }}>Welcome, Learn me more.</p>
            <div class="row mt-5">
                <div class="col-lg-4">
                    <div className="row">
                        <img src={pic} class="img-fluid rounded-circle w-75" alt="" />
                    </div>
                    <div style={{ marginLeft: '100px' }} className="row mt-3 p-3">
                        <ul class="social-network social-circle">
                            <li><a target="_blank" href="https://www.facebook.com/avijitdas.ovi/" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/avijit-das94/" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                            <li><a target="_blank" href="https://github.com/Avijit7102" class="icoGitHub" title="GitHub"><i class="fab fa-github"></i></a></li>

                        </ul>
                    </div>

                </div>
                <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>Professional WebDeveloper &amp; Programmer.</h3>
                    <p class="font-italic">
                        <small>Everything we can see, its all about 0 &amp; 1, Search about it.</small>
                    </p>
                    <div class="row mt-5">
                        <div class="col-lg-6 aboutMe">
                            <ul>
                                <li><i class="fas fa-birthday-cake" style={{ marginRight: '10px' }}></i> <strong>Birthday : </strong> 1st Feb 1994</li>
                                <li><i class="fas fa-phone-alt" style={{ marginRight: '10px' }}></i> <strong>Phone : </strong> +3476655348</li>
                                <li><i class="fas fa-city" style={{ marginRight: '10px' }}></i> <strong>City : </strong>New York, USA</li>
                            </ul>
                        </div>
                        <div class="col-lg-6 aboutMe">
                            <ul>
                                <li><i class="icofont-rounded-right"></i> <strong>Age:</strong> 27</li>
                                <li><i class="icofont-rounded-right"></i> <strong>Email:</strong> dasavijit.aiub@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-5 ">
                        Looking to establish my career in the field of software engineering with an opportunity to improve my skills and strengths in conjunction with the organizational goals and to attain excellence through experience.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutMe;