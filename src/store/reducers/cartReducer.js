const initialState = {
  carts: [],
  isLoadingCart: false,
  idCart: "",
  toast: false,
  countCart: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING_CART":
      return {
        ...state,
        isLoadingCart: action.payload,
      };
    case "SET_CART":
      return {
        ...state,
        carts: action.payload,
      };
    case "SET_COUNT_CART":
      return {
        ...state,
        countCart: action.payload,
      };
    case "SET_ID_CART":
      return {
        ...state,
        idCart: action.payload,
      };
    case "SET_TOAST":
      return {
        ...state,
        toast: action.payload,
      };
    default:
      return state;
  }
};
