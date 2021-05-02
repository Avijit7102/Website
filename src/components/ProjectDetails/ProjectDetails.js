import React from 'react';

const ProjectDetails = ({ project }) => {
    return (
        // <div className="col-md-4 text-center mb-5 p-1">
        //     <img style={{ height: '150px', width: '350px' }} src={project.image} alt="" />
        //     <h5 className="mt-3 mb-3">{project.title}</h5>
        //     <p className="card-text">{project.description}</p>
        //     <div className="d-flex justify-content-center mt-4">
        //         <div className="float-left">
        //             <a target="_blank" href={project.live}><button className="btn-brand" style={{ marginRight: '10px' }}>Live Link</button></a>
        //         </div>
        //         <div className="float-right">
        //             <a target="_blank" href={project.code}><button className="btn-brand">Code Link</button></a>
        //         </div>
        //     </div>
        // </div>
            <div className="col-md-4 mt-5">
                    <div class="card" style={{ width:'400px', height:'400px'}}>
                    <img  style={{ height: '150px', width: '400px' }} class="card-img-top img-fluid" src={project.image} alt="" />
                        <div class="card-body CardBody">
                            <h6 className="text-center border-bottom p-2">{project.title}</h6>
                            <p>{project.description}</p>
                            <div className="d-flex justify-content-center">
                                <div className="float-left">
                                    <a target="_blank" href={project.live}><button className="btn-brand" style={{marginRight:'10px'}}>Live Link</button></a>
                                </div>
                                <div className="float-right">
                                    <a target="_blank" href={project.code}><button className="btn-brand">Code Link</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
             </div>   
        
    );
};

export default ProjectDetails;