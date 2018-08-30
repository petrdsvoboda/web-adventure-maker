import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

const AssembledApp = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(<AssembledApp />, document.getElementById(
	'root'
) as HTMLElement)
registerServiceWorker()
