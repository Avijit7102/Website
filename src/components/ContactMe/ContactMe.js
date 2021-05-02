import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import resume from '../../resume.pdf';
const ContactMe = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_90m9pym', 'template_9y17fj7', e.target, 'user_2lziiIbiQm1oc27Er901I')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div style={{backgroundColor:'#071A52', color:'white'}}>
            <div className="text-center border-bottom page">
                <h1 className="pt-5">Let's Work Together...</h1>
                <div className="mt-5">
                <a  className="download" href={resume} download ="resume">Download My Resume</a>
                </div>
                <h6 className="mt-5">OR</h6>
                <p style={{marginTop:'10px'}}>Feel Free to Contact</p>
            </div>
            <div className="text-center formField page">
                 
                     <form onSubmit={sendEmail} className="m-5 p-5 contact-form" role="form" method="post" id="reused_form">
                        
                        <div class="row">
                            <div class="col-sm-6 form-group">
                                <label className="mb-2" for="name"> Your Name:</label>
                                <input type="text" class="form-control" id="name" name="user_name" required/>
                            </div>
                            <div class="col-sm-6 form-group">
                                <label className="mb-2" for="email"> Email:</label>
                                <input type="email" class="form-control" id="email" name="user_email" required/>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-sm-12 form-group">
                                <label className="mb-2" for="message"> Message:</label>
                                <textarea class="form-control" type="textarea" id="message" name="message" maxlength="6000" rows="7"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 form-group mt-5">
                                <button style={{color:'white'}}type="submit" value="Send" class="btn btn-lg btn-default pull-right btnContact border-bottom" >Send &rarr;</button>
                            </div>
                        </div>
                    </form>
                   
                    </div>
        </div>

    );
};

export default ContactMe;