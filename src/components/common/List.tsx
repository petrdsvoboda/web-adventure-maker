import * as React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import MUIList from '@material-ui/core/List'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'

import Line from '../../models/Line'
import { IRootState } from '../../store/reducer'
import { addLine, removeLine } from '../../store/reducers/data'
import ListItem from './ListItem'

const styles = createStyles({
	root: {
		maxWidth: 400
	}
})

interface IProps extends WithStyles<typeof styles> {
	lines: Line[]
	addLine: typeof addLine
	removeLine: typeof removeLine
}

class List extends React.Component<IProps> {
	public render() {
		const { classes, lines } = this.props

		return (
			<Card className={classes.root}>
				<CardContent>
					<MUIList>{lines.map(this.mapLine)}</MUIList>
				</CardContent>
				<CardActions>
					<Button variant="outlined" onClick={this.handleClick}>
						Add
					</Button>
				</CardActions>
			</Card>
		)
	}

	private handleClick = () => {
		this.props.addLine('k')
	}

	private mapLine = (line: Line) => (
		<ListItem key={line.id} line={line} onRemove={this.props.removeLine} />
	)
}

function mapStateToProps(state: IRootState) {
	const { lines } = state.data
	const lineArray: Line[] = Object.values(lines)

	return {
		lines: lineArray
	}
}

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(
		{
			addLine,
			removeLine
		},
		dispatch
	)

export default withStyles(styles)(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(List)
)
