import React from 'react';
import pic from '../../images/avi.jpg';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className="sidebar-page">
            
            <nav className="sidebar text-white">
            <div className="text-center">
                <img style={{width: '200px'}}className="img-fluid rounded-circle mt-2" src={pic} alt=""/>
                <h4 className="text-warning p-2 border-bottom">Avijit Das</h4>
            </div>
                <ul style={{listStyle:'none', marginLeft:'30px'}}>
                    <li>
                        <i className="fas fa-home text-success p-2"></i>Home
                    </li>
                    <li>
                        <i className="fas fa-tasks p-2"></i>Projects
                    </li>
                    <li>
                        <i className="fas fa-blog p-2"></i>Blogs
                    </li>
                    <li>
                        <i className="fa fa-file p-2"></i>Resume
                    </li>
                    <li>
                        <i className="fas fa-address-card p-2"></i>About
                    </li> 
                    <a href="djfn">asnfkv</a>   
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;