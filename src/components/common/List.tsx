import * as React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'
import MUIList from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'

import Line from '../../models/Line'
import { IRootState } from '../../store/reducer'
import { addLine } from '../../store/reducers/data'

interface IProps {
	lines: Line[]
	addLine: (line: any) => {}
}

const styles = () => ({
	root: {}
})

class List extends React.Component<IProps> {
	public render() {
		const { lines } = this.props

		return (
			<React.Fragment>
				<MUIList>{lines.map(this.mapLine)}</MUIList>
				<Button variant="outlined" onClick={this.handleClick}>
					Add
				</Button>
			</React.Fragment>
		)
	}

	private handleClick = () => {
		this.props.addLine('k')
	}

	private mapLine = (line: Line) => (
		<ListItem key={line.id}>
			<ListItemText primary={line.text} />
		</ListItem>
	)
}

function mapStateToProps(state: IRootState) {
	const { lines } = state.data
	const lineArray: Line[] = Object.values(lines)

	return {
		lines: lineArray
	}
}

function mapDispatchToProps(dispatch: Dispatch) {
	return bindActionCreators({ addLine }, dispatch)
}

export default withStyles(styles)(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(List)
)
