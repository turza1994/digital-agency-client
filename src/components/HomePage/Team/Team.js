import React from 'react';
import TeamMember from '../TeamMember/TeamMember';
import '../../../App.css'

const Team = () => {
    return (
        <section className="team">
            <div className="container">
                <h4 className="text-center header-primary">Our Team</h4>
                <h2 className="text-center display-5 header-secondary">Honest and Dedicated</h2>
                <div className="container my-5 py-5">
                    <div className="row">
                        <TeamMember />
                        <TeamMember />
                        <TeamMember />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;