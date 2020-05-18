import React from 'react'
import ShoppingButton from '../ShoppingButton/ShoppingButton';
import './product.css';
function Product({ name, price, action, label }) {
    
    return (
        <div className="product">
            <label>{name}</label>
            <span>{price}</span>
            <ShoppingButton className="raised" action={action} label={label} />
        </div>
    )

}

export default Product;