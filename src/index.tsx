import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import View from './components/App'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

const App = () => (
	<Provider store={store}>
		<View />
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
	module.hot.accept('./components/App', () => renderApp(App))
}

registerServiceWorker()
