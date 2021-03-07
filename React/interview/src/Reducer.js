export const reducer = (state, action) => {
    switch (action.type) {
      case "INSC":
        return { ...state, data: state.data - 1 };
      case "DESC":
        return { ...state, data: state.data + 1 };
      default:
        return state;
    }
  };
  
  export const initialState = {
    data: 0
  };