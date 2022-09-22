const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

export const logIn = (data) => {
  return {
    type: LOG_IN,
    data,
  };
};
export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};
const initialState = {
  isLoggedIn: false,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        isLoggedIn: true,
        user: action.data,
      };
    case LOG_OUT:
      return {
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
