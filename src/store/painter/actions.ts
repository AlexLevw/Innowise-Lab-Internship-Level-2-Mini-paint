import { Dispatch } from "redux";
import { painterConstants } from "@constants";

function setToolColor(color: string): CallableFunction {
  return (despatch: Dispatch) => {
    window.drawing?.setToolColor(color);
    despatch({
      type: painterConstants.actions.SET_COLOR,
      toolColor: color,
    });
  };
}

function setBrushSize(size: number): CallableFunction {
  return (despatch: Dispatch) => {
    window.drawing?.setBrushSize(size);
    despatch({
      type: painterConstants.actions.SET_SIZE,
      brushSize: size,
    });
  };
}

function setToolType(toolType: string): CallableFunction {
  return (despatch: Dispatch) => {
    window.drawing?.setToolType(toolType);
    despatch({
      type: painterConstants.actions.SET_TOOL_TYPE,
      toolType,
    });
  };
}

export default { setToolColor, setBrushSize, setToolType };
