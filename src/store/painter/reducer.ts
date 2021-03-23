import { painterConstants } from "@constants";
import { PainterState, PainterAction } from "./types";

const initialState: PainterState = {
  toolColor: painterConstants.TOOL_COLORS[0],
  brushSize: 10,
  toolType: painterConstants.BRUSH,
};

const painterReducer = (
  state: PainterState = initialState,
  action: PainterAction
): PainterState => {
  const actionTypes = painterConstants.actions;
  switch (action.type) {
    case actionTypes.SET_COLOR:
      return {
        toolColor: action.toolColor,
        brushSize: state.brushSize,
        toolType: state.toolType,
      };
    case actionTypes.SET_SIZE:
      return {
        toolColor: state.toolColor,
        brushSize: action.brushSize,
        toolType: state.toolType,
      };
    case actionTypes.SET_TOOL_TYPE:
      return {
        toolColor: state.toolColor,
        brushSize: state.brushSize,
        toolType: action.toolType,
      };
    default:
      return state;
  }
};

export default painterReducer;
