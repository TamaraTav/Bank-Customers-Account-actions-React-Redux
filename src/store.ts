import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import accountReducer from "./features/accounts/accountSlice";
import custumerReducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";
import type { ThunkDispatch } from "redux-thunk";
import type { AnyAction } from "redux";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: custumerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// @ts-expect-error - Redux 5 type compatibility issue with combineReducers
const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export default store;
