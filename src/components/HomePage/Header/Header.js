import React from 'react';
import HeaderBg from '../../../images/header-bg.jpg';
import './Header.css'
import '../../../App.css'

const Header = () => {
    return (
        <div className="header" style={{ backgroundImage: `url(${HeaderBg})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <h1 className="mt-5 display-3 lh-sm text-gradient text-fat">We believe in the power of creativity to solve problems.</h1>
                        <p className="fs-4 text-light mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio odio ea cumque eum, corporis unde pariatur repellat cum at eos?</p>
                        <button className="btn rounded-pill btn-gradient">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;