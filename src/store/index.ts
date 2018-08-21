import { compose, createStore } from 'redux'

import reducer from './reducer'

const composeEnhancers =
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = () => {
	const store = createStore(reducer, composeEnhancers())

	if (process.env.NODE_ENV !== 'production') {
		if (module.hot) {
			module.hot.accept('./reducer', () => {
				const test = require('./reducer')
				store.replaceReducer(test)
			})
		}
	}

	return store
}

export default configureStore
