import React from 'react';
import Product from '../Product/Product';
import './cartProduct.css';

export const CartProduct = ({ name, price, amount, removeFromCart }) => {
    
    return (
        <div className="cart-product">
            <Product
                name={name}
                label="Remove from cart"
                price={price}
                action={removeFromCart}
            />
            <div>
                Amount: {amount}
            </div>
        </div>
    )
}
