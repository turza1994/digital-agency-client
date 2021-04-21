import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Sidebar = ({isAdmin}) => {
    
    return (
        <div className="bg-dark w-25 text-white rounded-right d-flex flex-column align-items-start ps-5 pt-5 fw-5 fs-5 w-100" style={{height:"90vh", marginLeft:"-50px"}}>
            {
                isAdmin ? 
                <div>
                    <Link to="/all-orders" style={{textDecoration: "none", color: 'white'}}><p><FontAwesomeIcon className="icon me-1 text-light" icon={faList} /> All Orders </p></Link>
                    <Link to="/add-service" style={{textDecoration: "none", color: 'white'}}><p><FontAwesomeIcon className="icon me-1 text-light" icon={faLaptopCode} /> Add Service </p></Link>
                    <Link to="/make-admin" style={{textDecoration: "none", color: 'white'}}><p><FontAwesomeIcon className="icon me-1 text-light" icon={faUserPlus} /> Make Admin </p></Link>
                    <Link to="/manage-services" style={{textDecoration: "none", color: 'white'}}><p><FontAwesomeIcon className="icon me-1 text-light" icon={faTasks} /> Manage Services </p></Link>
                </div>
                :
                <div>
                    <Link to="/orders" style={{textDecoration: "none", color: 'white'}}><p><FontAwesomeIcon className="icon me-1 text-light" icon={faList} /> Your Orders </p></Link>
                    <Link to="/write-review" style={{textDecoration: "none", color: 'white'}}><p><FontAwesomeIcon className="icon me-1 text-light" icon={faComment} /> Write Review </p></Link>
                </div>
            }
            
        </div>
    );
};

export default Sidebar;