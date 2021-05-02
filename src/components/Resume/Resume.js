import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Resume.css';

const Resume = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{backgroundColor:'#fff'}}className="row border-bottom p-5">
                <div className="col-6 mt-5 text-center">
                    <h1 style={{marginLeft:'80px'}}className="mt-5">AVIJIT</h1>
                    <h1 style={{marginLeft:'50px'}}>DAS</h1>
                </div>
                <div className="col-6 mt-5">
                    <ul class="social-network social-circle headRight">
                        <li><i class="fas fa-home p-2"></i>4020 70th St, Woodside, NY-11377 </li><br/>
                        <li><i class="fas fa-phone-alt p-2"></i>+1(347)-6655348 </li><br/>
                        <li><i class="fas fa-envelope-square p-2"></i>dasavijit.aiub@gmail.com </li><br/>
                        <li><a target="_blank" href="https://www.linkedin.com/in/avijit-das94/" class="icoLinkedin p-2" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                        <li><a target="_blank" href="https://github.com/Avijit7102" class="icoGitHub p-2" title="GitHub"><i class="fab fa-github"></i></a></li>

                    </ul>
                </div>

            </div>
            <div className="row justify-content-center border-bottom m-2 headRight">
                <div className="col-md-6 mt-3 mb-3" >
                <h4 className="mb-3">Skills</h4>
                <p>• Programming Language: C, C++, JavaScript (React), HTML, CSS</p>
                <p>• Software Package: Visual Studio, Code Blocks, Dev-C++</p>
                <p>• MongoDB</p>
                <p>• Firebase, Netlify, GitHub</p>
                <p>• Node JS, Express JS</p>
                <p>• continuously solving problem on LeetCode, Hackerrank.</p>

                </div>

            </div>

            <div className="row justify-content-center border-bottom m-2 headRight">
                <div className="col-md-6 mt-3 mb-3">
                    <h4 className="mb-3">Education</h4>
                    <p>LaGuardia Community College, City University of New York</p>
                    <p><small>31-10 Thomson Ave</small></p>
                    <p><small>Long Island City, NY.</small></p>
                    <p>Associate of Science in Computer Science.</p>
                    <p>Spring 2020 - Expecting Graduation Dec 2021</p>
                    <p>GPA: 3.825</p>

                </div>

            </div>

            <div className="row justify-content-center border-bottom m-2 headRight">
                <div className="col-md-6 mt-3 mb-3">
                    <h4 className="mb-3">PROJECT:</h4>
                    <h6 className="mb-3 pb-2">Name: Dream-Auto</h6>
                    <p>•  Built a full-stack service-related web app that allow user to select a service, process to checkout using stripe, used Google authentication and private route, services and reviews are dynamically updated from the database by admin and customer.</p>
                    <a style={{textDecoration: 'none'}} href="https://dream-auto-8323b.web.app/">Live Link</a>
                    <a style={{textDecoration: 'none', marginLeft:'20px'}} href="https://github.com/Avijit7102/Dream-Auto-Client-Code">Code Link</a>

                </div>

            </div>

            <div className="row justify-content-center border-bottom m-2 headRight">
                <div className="col-md-6 mt-3 mb-3">
                    <h6 className="mb-3">Name: Mens-T-Shirt</h6>
                    <p>•  Built an e-commerce related full stack web app where user can select product and place an order also admin can check all the order list and user can also see all his order history. Google Authentication, private route used in this project</p>
                    <a style={{textDecoration: 'none'}} href="https://men-t-shirt.web.app/">Live Link</a>
                    <a style={{textDecoration: 'none', marginLeft:'20px'}} href="https://github.com/Avijit7102/MensTShirt-Clinet-Code">Code Link</a>

                </div>

            </div>

            <div className="row justify-content-center border-bottom m-2 headRight">
                <div className="col-md-6 mt-3 mb-3">
                    <h4 className="mb-3">Accomplishments:</h4>
                    <p>• Member of Phi Theta Kappa</p>
                    <p>• Responsive Web Design Certificate from FreeCodeCamp.org</p>
                    <p>• Silver level on Problem Solving, 30days of Code and Gold level on C++, 10 Days of JS at Hacker rank.</p>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Resume;