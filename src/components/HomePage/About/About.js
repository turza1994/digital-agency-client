import React from 'react';
import AboutImg from '../../../images/about.jpg';
import '../../../App.css'

const About = () => {
    return (
        <div className="text-light" style={{ backgroundColor: '#171717' }}>
            <div className="container">
                <div className="row">

                    <div className="col-sm-6 p-5">
                        <h5 className="text-gradient">WE ARE CREATIVE AGENCY</h5>
                        <h2 className="display-5 text-fat">About our Agency</h2>
                        <p className="lead pt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita sed rem sint voluptate aspernatur doloribus dolores voluptatem aut laudantium.
                        </p>
                        <br/>
                        <div className="d-flex justify-content-center align-items-start">
                            <div className="bg-light d-inline-block p-2 rounded me-3">
                                <img src="https://rajeshdoot.com/niwax-demos/html/images/icons/computers.svg" alt="" height="45" width="45" />
                            </div>
                            <div>
                                <h4>Streamlined Project Management</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, incidunt.</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-start">
                            <div className="bg-light d-inline-block p-2 rounded me-3">
                                <img src="https://rajeshdoot.com/niwax-demos/html/images/icons/worker.svg" alt="" height="45" width="45" />
                            </div>
                            <div>
                                <h4>A Dedicated Team of Experts</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, incidunt.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 d-flex justify-content-center align-items-center p-5">
                        <img className="w-100" src={AboutImg} alt=""/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;