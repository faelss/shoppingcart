import React from 'react';
import { connect } from "react-redux";
import { removeFromCart } from '../redux/actions/shoppingCart';
import { CartProduct } from '../components/CartProduct/CartProduct';
import FeatureToggleComponent from '../components/FeatureToggleComponent/FeatureToggleComponent';

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
            <>
                { 
                    products.map(product => {
                        return (
                            <CartProduct
                                {...product}
                                key={'cart_' + product.id}
                                label="Remove from cart"
                                removeFromCart={() => removeFromCart(product.id)}
                            />
                        )
                    })
                }
                <div className="total">
                    Total price: ${products.reduce( (reducer, product) =>  (reducer += product.price * product.amount), 0)}
                </div>
                <FeatureToggleComponent featureName="Teste">
                    <FeatureToggleComponent.ToggleComponent>
                        <div>
                            Teste
                        </div>
                    </FeatureToggleComponent.ToggleComponent>
                    <FeatureToggleComponent.FallbackComponent>
                        <div>
                            Fallback component!
                        </div>
                    </FeatureToggleComponent.FallbackComponent>
                </FeatureToggleComponent>
            </>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: id => dispatch(removeFromCart(id)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
