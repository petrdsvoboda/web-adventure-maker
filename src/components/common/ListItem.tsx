import * as React from 'react'

import IconButton from '@material-ui/core/IconButton'
import MUIListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'
import ClearIcon from '@material-ui/icons/Clear'

import Line from '../../models/Line'
import { removeLine } from '../../store/reducers/data'

const styles = () => ({
	root: {}
})

interface IProps {
	line: Line
	onRemove: typeof removeLine
}

class ListItem extends React.PureComponent<IProps> {
	public render() {
		const { line } = this.props

		return (
			<MUIListItem key={line.id}>
				<ListItemText primary={line.text} />
				<ListItemSecondaryAction>
					<IconButton onClick={this.handleRemove}>
						<ClearIcon />
					</IconButton>
				</ListItemSecondaryAction>
			</MUIListItem>
		)
	}

	private handleRemove = () => {
		this.props.onRemove(this.props.line.id)
	}
}

export default withStyles(styles)(ListItem)
