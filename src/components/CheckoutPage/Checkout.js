import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import '../../App.css'
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ii4i4CslXa2fUJ0b48VSBjd5wwJ3cFkEyhjx6nnxUAT8o6kDJFqmBNtg7L6dClILyCJG6Y0z3lqZobefRFGpPMV00cDC53EBb');

const Checkout = () => {
    const{id} = useParams()
    const[service, setService] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch(`https://digital-agency-1994.herokuapp.com/services/${id}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    let history = useHistory();

    const handleCheckout = ()=>{
        const newOrder = {
            name: service.name,
            quantity: 1,
            price: service.price,
            details: service.details,
            image: service.image,
            userEmail: loggedInUser.email,
            orderDate: new Date(),
            isPayment: true,
            status: "pending"
        }
        fetch("https://digital-agency-1994.herokuapp.com/addOrder", {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res => console.log('server side response', res))

        history.push("/")
    }
    console.log(loggedInUser.email);
    return (
        <div>
            <h2 className="p-5">checkout</h2>
            <div className="w-50 mx-auto">
                <table className="w-100">
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>{service.name}</td>
                        <td>1</td>
                        <td>{service.price}</td>
                    </tr>
                    <br/>
                    <tr>
                        <td colSpan="2">Total</td>
                        <td>{service.price}</td>
                    </tr>
                    <br/>
                    <tr>
                        <td>
                            <Elements stripe={stripePromise}>
                                <SimpleCardForm placeOrder={handleCheckout} />
                            </Elements>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Checkout;