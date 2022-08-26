import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

const createComposer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// this line checks if we have installed the redux devtools or not, if not then don't
// add the compose function

export const store = createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);
