import React from 'react';
import dream from '../../images/dreamAuto.png';
import team from '../../images/teamTracker.PNG';
import shirt from '../../images/Shirt.PNG';
import hungry from '../../images/Hungry.PNG';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const styles = {
    backgroundImage: 'linear-gradient(-15deg,rgba(255,122,24,.25),#fff)',
    backgroundSize: 'cover'
}

const projectsData = [
    {
        id: 1,
        title: 'Dream Auto',
        image: dream,
        description:"Built a full-stack service-related web app User can select a service, used stripe for payment used Google authentication and private route services and reviews are dynamic.updated from the database by admin and customer",
        live: 'https://dream-auto-8323b.web.app/',
        code: 'https://github.com/Avijit7102/Dream-Auto-Client-Code'
    },
    {
        id: 2,
        title: 'Team Tracker',
        image: team,
        description: "Built an e-commerce related full stack web app where user can select product and place an order admin can check all the order list and user can also see all his order history used Google authentication and private route",
        live: 'https://avijitdas7102-team-tracker.netlify.app/',
        code: 'https://github.com/Avijit7102/team-tracker'
    },
    {
        id: 3,
        title: 'Hungry Monster',
        image: hungry,
        description: "Built a front end website for restaurant where user search food clicking on the search from the search result user can get the details about the food used Meal DB API",
        live: 'https://avijit7102.github.io/hungry-monster/',
        code: 'https://github.com/Avijit7102/hungry-monster'
    },
    {
        id: 4,
        title: 'Mens-T-Shirt',
        image: shirt,
        description: "Built an e-commerce related full stack web app where user can select product and place an order also admin can check all the order list and user can also see all his order history. Google Authentication, private route used in this project",
        live: 'https://men-t-shirt.web.app/',
        code: 'https://github.com/Avijit7102/MensTShirt-Clinet-Code'
    }
    
]
const Projects = () => {
    return (
        <div style={styles}>
            <Navbar></Navbar>
            <div className="row mt-5" style={{marginLeft:'20px'}}>
            {
                projectsData.map(project => <ProjectDetails project = {project}></ProjectDetails>)
            }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Projects;