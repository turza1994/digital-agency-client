import React from 'react';
import PortfolioCard from '../PortfolioCard/PortfolioCard';

const Portfolio = () => {
    return (
        <div className="services text-center my-5 py-5">
            <h4 className="header-primary">Our Work</h4>
            <h2 className="display-5 header-secondary">Our Latest Creative Work</h2>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;