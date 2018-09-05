import * as React from 'react'

import MUIListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'

import Line from '../../models/Line'

interface IProps {
	line: Line
}

const styles = () => ({
	root: {}
})

class ListItem extends React.PureComponent<IProps> {
	public render() {
		const { line } = this.props

		return (
			<MUIListItem key={line.id}>
				<ListItemText primary={line.text} />
			</MUIListItem>
		)
	}
}

export default withStyles(styles)(ListItem)
