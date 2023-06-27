import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// Redux Reducers
import authReduxReducer from './reducers/Auth/AuthReduxReducer';

const rootReducers = combineReducers({authReduxReducer});
const logger = createLogger();
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

export default store;