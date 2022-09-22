import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import login from "./login";
import post from "./post";

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  login,
  post,
});

export default rootReducer;
