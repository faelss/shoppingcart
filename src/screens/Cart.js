import React from 'react'
import { connect } from "react-redux";
import { removeFromCart } from '../redux/actions/shoppingCart';
import { CartProduct } from '../components/CartProduct/CartProduct';

const Cart = ({ products, removeFromCart }) => {

    if (products.length === 0) {
        return (
            <div className="cart">
                No products in your cart yet!
            </div>
        )
    }
    return (
        <div className="cart">
            { 
                products.map(product => {
                    return (
                        <CartProduct
                            key={'cart_' + product.id}
                            name={product.name}
                            id={product.id}
                            label="Remove from cart"
                            price={product.price}
                            amount={product.amount}
                            removeFromCart={() => removeFromCart(product.id)}
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: id => dispatch(removeFromCart(id)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
