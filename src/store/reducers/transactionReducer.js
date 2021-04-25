const initialState = {
  transactions: [],
  isLoadingTransaction: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING_TRANSACTIONS":
      return {
        ...state,
        isLoadingTransaction: action.payload,
      };
    case "SET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};