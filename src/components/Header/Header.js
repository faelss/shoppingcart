import React from 'react'
import { connect } from "react-redux";
import './header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ products }) => {

    const location = useLocation();

    return (
        <div className="header">
            <h3>
                Example Shopping!
            </h3>
            <div className="header-cart-info">
                Products in the cart: {products.length}
            </div>
            <div className="header-goto-cart">
            {
                location.pathname === '/cart' 
                ?
                <Link to="/">
                    Home
                </Link>
                :
                <Link to="/cart">
                    Cart
                </Link>
            }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Header);
