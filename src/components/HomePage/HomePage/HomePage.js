import React from 'react';
import Footer from '../../Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Services />
            <About />
            <Portfolio />
            <Testimonials />
            <Team />
            <Footer />
        </div>
    );
};

export default HomePage;