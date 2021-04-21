import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import '../../../App.css'

const Testimonials = () => {

    const [reviewList, setReviewList] = useState([]);
    
    useEffect(()=>{
        fetch("https://digital-agency-1994.herokuapp.com/reviews")
        .then(res => res.json())
        .then(data => setReviewList(data))
    },
    [reviewList])

    return (
        <div className="my-5 py-5 text-light" style={{ backgroundColor: '#171717' }}>
            <h5 className="text-center text-gradient">OUR HAPPY CUSTOMERS</h5>
            <h2 className="display-5 text-fat text-center">Customer Testimonials</h2>
            <div className="container my-5 py-5">
                <div className="row g-5 justify-content-center align-items-center">
                    {
                        reviewList.map(rl => <Review key={rl._id} review={rl} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;