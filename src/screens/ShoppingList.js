import React from 'react';
import { connect } from "react-redux";
import { addToCartNewProduct, addToCartExistingProduct } from "../redux/actions/shoppingCart";
import Product from '../components/Product/Product';

function ShoppingList({ products, addToCartNewProduct, addToCartExistingProduct }) {

    const shoppingList = [
        {
          name: "item1",
          price: 12.44,
          id: 1,
        },
        {
          name: "item2",
          price: 20.44,
          id: 2,
        },
        {
          name: "item3",
          price: 30.44,
          id: 3,
        },
        {
          name: "item4",
          price: 40.44,
          id: 4,
        }
    ];

    return (
        <div className="shopping-list">
        {
            shoppingList.map(product => {
                return (
                    <Product
                        key={product.id}
                        name={product.name}
                        label="Add to cart"
                        price={product.price}
                        action={() => {
                            //refactor to redux handle this
                            if (products.find(storeProduct => storeProduct.id === product.id)) {
                                return addToCartExistingProduct(product);
                            }
                            return addToCartNewProduct(product);
                        }}
                    />
                )
            })
        }
        </div>
    )
}

const mapStateToProps = ({ products }) => {
    return {
        products: products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addToCartNewProduct: product => dispatch(addToCartNewProduct(product)),
        addToCartExistingProduct: product => dispatch(addToCartExistingProduct(product)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingList);