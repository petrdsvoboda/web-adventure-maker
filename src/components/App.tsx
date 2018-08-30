import * as React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'

import List from './common/List'

const styles = () => ({
	root: {}
})

class App extends React.Component {
	public render() {
		const {} = this.props

		return (
			<React.Fragment>
				<CssBaseline />
				<List />
			</React.Fragment>
		)
	}
}

export default withStyles(styles)(App)
