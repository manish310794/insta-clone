import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(
		rootReducer,
		preloadedState,
		composeEnhancers(applyMiddleware(thunk))
	);
};

export default configureStore;