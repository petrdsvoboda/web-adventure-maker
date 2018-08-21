import { Action, ActionCreator, Reducer } from "redux";
import { assocPath, dissocPath } from "ramda";

interface ILine {
  id?: number;
  text?: string;
}

class Line implements ILine {
  public id: number;
  public text: string;

  constructor(line: ILine) {
    line.id = 1;
    Object.assign(this, line);
  }
}

export enum ActionTypes {
  AddLine = "data/ADD_LINE",
  EditLine = "data/EDIT_LINE",
  RemoveLine = "data/REMOVE_LINE"
}

export interface IAddLineAction extends Action<ActionTypes.AddLine> {
  payload: {
    line: Line;
  };
}

export interface IEditineAction extends Action<ActionTypes.EditLine> {
  payload: {
    line: ILine;
  };
}

export interface IRemoveLineAction extends Action<ActionTypes.RemoveLine> {
  payload: {
    id: number;
  };
}

export type ActionMap = IAddLineAction | IEditineAction | IRemoveLineAction;

export const addLine: ActionCreator<IAddLineAction> = (line: ILine) => ({
  type: ActionTypes.AddLine,
  payload: {
    line: new Line(line)
  }
});

interface IDataMap<T> {
  [key: number]: T;
}

export interface IState {
  readonly lines: IDataMap<Line>;
}

const initialState: IState = {
  lines: {}
};

type ReducerMap = { [key in ActionTypes]: Reducer<IState, ActionMap> };

const reducerMap: ReducerMap = {
  [ActionTypes.AddLine]: (state: IState, action: IAddLineAction) => {
    const { line } = action.payload;
    return assocPath(["lines", line.id.toString()], line, state);
  },
  [ActionTypes.EditLine]: (state: IState, action: IEditineAction) => state,
  [ActionTypes.RemoveLine]: (state: IState, action: IRemoveLineAction) => {
    const { id } = action.payload;
    return dissocPath(["lines", id], state);
  }
};

export const reducer: Reducer<IState> = (
  state: IState = initialState,
  action: ActionMap
) => {
  const useReducer = reducerMap[action.type];
  return useReducer ? useReducer(state, action) : state;
};
