import React from 'react';
import TeamImg from '../../../images/team.png';

const TeamMember = () => {
    return (
        <div className="col-md-4 col-sm-6 text-center lh-1">
            <img style={{width: '200px'}} className="img-fluid mb-3" src={TeamImg} alt=""/>
            <p className="text-secondary">Admin</p>
            <p className="fs-4">Mazba Turza</p>
            <p>+880-188-934789</p>
        </div>
    );
};

export default TeamMember;