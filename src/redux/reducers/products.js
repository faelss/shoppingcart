const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART_NEW_PRODUCT":
      return [
        ...state,
        {
          ...action.payload,
          amount: 1,
        },
      ];

    case "ADD_TO_CART_EXISTING_PRODUCT":
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            amount: product.amount + 1,
          };
        }
        return product;
      });

    case "REMOVE_FROM_CART":
      return state
        .filter((product) => {
          if (product.id === action.payload) {
            return product.amount - 1 !== 0;
          }
          return true;
        })
        .map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              amount: product.amount - 1,
            };
          }

          return product;
        });

    default:
      return state;
  }
};

export default productsReducer;
