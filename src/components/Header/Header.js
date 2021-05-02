import React from 'react';
import pic from '../../images/avi.jpg';
import './Header.css';
const Header = () => {
    return (
        <div className="d-flex header">
            <div className="text-center m-2">
                <img className="img-fluid rounded-circle w-50" src={pic} alt="" />
            </div>
            <div class="d-flex align-items-center">
                <h4 style={{ fontStyle: 'italic', fontFamily: 'sans-serif', fontWeight: '300' }}>Avijit Das<br />I am a professional Web Developer</h4>
            </div>
            
        </div>
    );
};

export default Header;