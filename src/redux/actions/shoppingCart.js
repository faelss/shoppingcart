
const addToCartNewProduct = product => {
    return {
        type: "ADD_TO_CART_NEW_PRODUCT",
        payload: product
    }    
}

const addToCartExistingProduct = product => {
    return {
        type: "ADD_TO_CART_EXISTING_PRODUCT",
        payload: product
    }    
}

const removeFromCart = id => {
    return {
        type: "REMOVE_FROM_CART",
        payload: id
    }    
}

export {
    addToCartNewProduct,
    addToCartExistingProduct,
    removeFromCart,
}
