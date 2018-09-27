import { Reducer } from 'redux'
import { assocPath, dissocPath } from 'ramda'

import {
	createAction,
	ActionsUnion,
	IActionWithPayload
} from '../../utils/actions'
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
	[key: number]: T
}

export interface IState {
	readonly lines: IDataMap<Line>
}

const initialState: IState = {
	lines: {}
}

type ReducerMap = { [key in ActionTypes]: Reducer<IState, Actions> }

const reducerMap: ReducerMap = {
	[ActionTypes.AddLine]: (state, action) => {
		const { line } = action.payload
		return assocPath(['lines', line.id.toString()], line, state)
	},
	[ActionTypes.EditLine]: state => state,
	[ActionTypes.RemoveLine]: (state, action) => {
		const { payload: id } = action.payload
		return dissocPath(['lines', id], state)
	}
} as ReducerMap

export const reducer: Reducer<IState> = (
	state: IState = initialState,
	action: Actions
) => {
	const useReducer = reducerMap[action.type]
	return useReducer ? useReducer(state, action) : state
}
