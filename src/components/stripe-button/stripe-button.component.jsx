

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JC9QVLPEG5jSvt5bhcKG76uzk21oXAajNskblXMIFoMVbcBFl0rXcd4oSJNhxleiJOyUg4ily1Dnse3IlJqIOH600xVEmpzry';


    const onToken = Token => {
        alert('Payment successful')
    }

    return (
        <StripeCheckout
            label="Pay now" 
            name="CRWN Cloting" 
            billingAddress 
            shippingAddress 
            image="https://sendeyo.com/up/d/f3eb2117da" 
            description={`Your total is $${price}`} 
            amount={priceForStripe} 
            panelLabel="Pay now" 
            token={onToken} 
            stripeKey={publishableKey}

        />
    )
}


export default StripeCheckoutButton;