import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';


const CheckoutPage = ({ cartItems, total }) => (

    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                Product
            </div>
            <div className="header-block">
                Description
            </div>
            <div className="header-block">
                Quantity
            </div>
            <div className="header-block">
                Price             
            </div>
            <div className="header-block">
                Remove
            </div>
        </div>
        {
            cartItems.map( cartItem => 
                    <CheckoutItem 
                        cartItem={cartItem} 
                        key={cartItem.id}
                     />
                )
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
        <div className="test-warning">
            * Please use the following test card for the credit
            <br />
            4242 4242 4242 4242 - Exp 01/20 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);