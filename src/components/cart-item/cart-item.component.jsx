import React from 'react';

import './cart-item.styles.scss';


const CartItem = ({ item: { imageURL, price, name, quatity} }) => (
    <div className='cart-tem'>
        <img src={imageURL} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                {quatity} x ${price}
            </span>
        </div>
    </div>
) 

export default CartItem;