import { Reducer } from 'redux'
import { assocPath, dissocPath } from 'ramda'

import { createAction, ActionsUnion } from '../../utils/actions'
import Line from '../../models/Line'

export enum ActionTypes {
	AddLine = '[data] ADD_LINE',
	EditLine = '[data] EDIT_LINE',
	RemoveLine = '[data] REMOVE_LINE'
}

export const addLine = (text: string) =>
	createAction(ActionTypes.AddLine, {
		line: new Line({ text })
	})
export const removeLine = (id: string) =>
	createAction(ActionTypes.RemoveLine, {
		id
	})

export const Actions = {
	addLine,
	removeLine
}

export type Actions = ActionsUnion<typeof Actions>

interface IDataMap<T> {
	readonly [key: number]: T
}

export interface IState {
	readonly lines: IDataMap<Line>
}

const initialState: IState = {
	lines: {}
}

export const reducer: Reducer<IState> = (
	state: IState = initialState,
	action: Actions
) => {
	switch (action.type) {
		case ActionTypes.AddLine: {
			const {
				payload: { line }
			} = action
			return assocPath(['lines', line.id.toString()], line, state)
		}
		case ActionTypes.RemoveLine: {
			const { id } = action.payload
			return dissocPath(['lines', id], state)
		}
		default:
			return state
	}
}
