import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import '../../App.css'

const SimpleCardForm = ({placeOrder}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
            setPaymentError(error.message)
            setPaymentSuccess(null);

        } else {
            console.log('[PaymentMethod]', paymentMethod);
            console.log('paymentMethod', paymentMethod);
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            placeOrder()
        }
    };

    return (
        <div>
            <form className="" onSubmit={handleSubmit}>
                <CardElement />
                <button className="btn btnSubmit w-25 fw-bold mt-5 btn-gradient rounded-pill" type="submit" disabled={!stripe}>
                    Pay Now
                </button>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green' }}>Your payment was successful</p>
            }
        </div>
    );
};

export default SimpleCardForm;