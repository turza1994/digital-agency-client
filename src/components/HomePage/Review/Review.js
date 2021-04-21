import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

const Review = ({review}) => {
    const {userName, photoURL, rating, comment} = review
    return (
        <div className="col-sm-6 d-flex justify-content-center">
            <div>
                <h5> <img src={photoURL} alt="" className="rounded-pill" width="30" /> {userName} </h5>
                {<p className="ms-4 text-warning">Rating: {rating}.0</p>}
                <p className="lead ms-4 text-secondary" ><i>{comment}</i></p>
            </div>
        </div>
    );
};

export default Review;