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
  me: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        isLoggedIn: true,
        me: {
          id: action.data,
        },
      };
    case LOG_OUT:
      return {
        isLoggedIn: false,
        me: {},
      };
    default:
      return state;
  }
};

export default reducer;
