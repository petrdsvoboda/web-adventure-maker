import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
// import { Router, browserHistory } from 'react-router'

import './index.css'
import configureStore from './redux/store'
import registerServiceWorker from './registerServiceWorker'
// import routes from 'routes'

import DialogView from './components/views/DialogView/DialogView'

export const store = configureStore()

const App = () => (
	<Provider store={store}>
		{/* <Router history={browserHistory} routes={routes} /> */}
		<DialogView />
	</Provider>
)

const renderApp = (Component: () => JSX.Element) => {
	render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('root') as HTMLElement
	)
}

renderApp(App)

if (module.hot) {
	module.hot.accept('App', () => renderApp(App))
}

registerServiceWorker()
