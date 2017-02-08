import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { getValueReducer } from "./reducers";
import thunk from "redux-thunk";
import createLogger from "redux-logger";

const logger = createLogger();

const makeRootReducer = ( asyncReducers ) => {
	return combineReducers({
		getValueReducer,
	})
};


const initialState = {};


export const store = createStore(
	makeRootReducer(),
	initialState,
	applyMiddleware(
		thunk,
		logger
	)
);


