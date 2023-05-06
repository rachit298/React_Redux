import { combineReducers } from "redux";

import shopReducer from "./Shopping/Shopping_reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer;
