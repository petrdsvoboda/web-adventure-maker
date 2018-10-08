import { combineReducers } from 'redux'

import { reducer, IState, Actions } from './reducers/data'

export interface IRootState {
	readonly data: IState
}

type RootActions = Actions

export default combineReducers<IRootState, RootActions>({ data: reducer })
