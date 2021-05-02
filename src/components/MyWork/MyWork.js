import React from 'react';
import dream from '../../images/dreamAuto.png';
import team from '../../images/teamTracker.PNG';
import hungry from '../../images/Hungry.PNG';
import './MyWork.css';
const work = [
    {
        title: 'Dream Auto',
        image: dream,
        live: 'https://dream-auto-8323b.web.app/',
        code: 'https://github.com/Avijit7102/Dream-Auto-Client-Code'
    },
    {
        title: 'Team Tracker',
        image: team,
        live: 'https://avijitdas7102-team-tracker.netlify.app/',
        code: 'https://github.com/Avijit7102/team-tracker'
    },
    {
        title: 'Hungry Monster',
        image: hungry,
        live: 'https://avijit7102.github.io/hungry-monster/',
        code: 'https://github.com/Avijit7102/hungry-monster'
    }
]
const MyWork = () => {
    return (
        <div className="m-5 bg-light CardBody">
            <h3 style={{fontWeight:'300', fontFamily:'cursive'}} className="text-center m-5 pt-5">My Projects <br/><i class="fas fa-arrow-down mt-2"></i> </h3>
            
            <div className="row">
                <div className="col-md-4">
                    <div class="card" style={{ width:'400px'}}>
                        <img style={{height:'172px'}} class="card-img-top img-fluid" src={work[0].image} alt="Card image cap" />
                        <div class="card-body CardBody">
                            <h6 className="text-center">{work[0].title}</h6>
                            <p class="card-text">•	Built a full-stack service-related web app</p>
                            <p class="card-text">•	User can select a service, used stripe for payment</p>
                            <p class="card-text">•  used Google authentication and private route</p>
                            <p class="card-text">•  services and reviews are dynamic.updated from the database by admin and customer.</p>
                            <div className="d-flex justify-content-center">
                                <div className="float-left">
                                    <a target="_blank" href={work[0].live}><button className="btn-brand" style={{marginRight:'10px'}}>Live Link</button></a>
                                </div>
                                <div className="float-right">
                                    <a target="_blank" href={work[0].code}><button className="btn-brand">Code Link</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" style={{ width:'400px'}}>
                        <img class="card-img-top img-fluid" src={work[1].image} alt="Card image cap" />
                        <div class="card-body CardBody">
                            <h6 className="text-center">{work[1].title}</h6>
                            <p class="card-text">•	Built an e-commerce related full stack web app  </p>
                            <p class="card-text">•	where user can select product and place an order</p>
                            <p class="card-text">•  admin can check all the order list and user can also see all his order history</p>
                            <p class="card-text">•  used Google authentication and private route</p>
                            <div className="d-flex justify-content-center">
                                <div className="float-left">
                                    <a target="_blank" href={work[1].live}><button className="btn-brand" style={{marginRight:'10px'}}>Live Link</button></a>
                                </div>
                                <div className="float-right">
                                    <a target="_blank" href={work[1].code}><button className="btn-brand">Code Link</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" style={{ width:'400px'}}>
                        <img style={{height:'172px'}} class="card-img-top img-fluid" src={work[2].image} alt="Card image cap" />
                        <div class="card-body CardBody">
                            <h6 className="text-center">{work[2].title}</h6>
                            <p class="card-text">•	Built a front end website for restaurant</p>
                            <p class="card-text">•	where user search food clicking on the search</p>
                            <p class="card-text">•  from the search result user can get the details about the food.</p>
                            <p class="card-text">•  used Meal DB API</p>
                            <div className="d-flex justify-content-center">
                                <div className="float-left">
                                    <a target="_blank" href={work[2].live}><button className="btn-brand" style={{marginRight:'10px'}}>Live Link</button></a>
                                </div>
                                <div className="float-right">
                                    <a target="_blank" href={work[2].code}><button className="btn-brand">Code Link</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="text-center mt-5">
                <a href=""><button className="btn-brand" style={{width:'300px', border: 'none', padding: '5px', marginRight:'40px', marginBottom: '10px'}}>See More</button></a>
            </div>
        </div>
    );
}

export default MyWork;