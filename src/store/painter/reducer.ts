import { painterConstants } from "@constants";
import { PainterState, PainterAction } from "./types";

const initialState: PainterState = { brushColor: "black", brushSize: 10 };

const painterReducer = (
  state: PainterState = initialState,
  action: PainterAction
): PainterState => {
  const actionTypes = painterConstants.actions;
  switch (action.type) {
    case actionTypes.SET_COLOR:
      return { brushColor: action.brushColor, brushSize: state.brushSize };
    case actionTypes.SET_SIZE:
      return { brushColor: state.brushColor, brushSize: action.brushSize };
    default:
      return state;
  }
};

export default painterReducer;
