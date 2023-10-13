import React from "react";
import { createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import reducers from "./reducers";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
import {
  Auth,
  Account,
  Budget,
  Trans,
  User,
  Shares,
  Messages,
} from "../dataTypes";

export interface AppState {
  auth: Auth;
  user: User;
  budget: Budget;
  account: Account;
  trans: Trans[];
  shares: Shares[];
  messages: Messages[];
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = composeEnhansers(applyMiddleware(thunk))(
  createStore
);

export const store = createStoreWithMiddleware(reducers);
