import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// Redux Reducers
import authReducer from './reducers/Auth/AuthReduxReducer';
import loadingReducer from './reducers/Loading/LoadingReduxReducer';

const rootReducers = combineReducers({authReducer, loadingReducer});
const logger = createLogger();
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

export default store;