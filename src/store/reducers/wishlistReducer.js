const initialState = {
  wishlists: [],
  isLoadingWishlist: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING_WISHLIST":
      return {
        ...state,
        isLoadingWishlist: action.payload,
      };
    case "SET_WISHLIST":
      return {
        ...state,
        wishlists: action.payload,
      };
    default:
      return state;
  }
};
