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

const store = createStore(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rootReducer as any,
  applyMiddleware(thunk)
);

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export default store;
