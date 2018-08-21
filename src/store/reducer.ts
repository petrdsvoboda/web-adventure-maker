import { combineReducers } from "redux";

import { reducer, IState, ActionMap } from "./reducers/data";

interface IRootState {
  readonly data: IState;
}

type RootActions = ActionMap;

export default combineReducers<IRootState, RootActions>({ data: reducer });
