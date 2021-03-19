import { Dispatch } from "redux";
import { painterConstants } from "@constants";

function setBrushColor(color: string): CallableFunction {
  return (despatch: Dispatch) => {
    window.drawing?.setBrushColor(color);
    despatch({
      type: painterConstants.actions.SET_COLOR,
      brushColor: color,
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

export default { setBrushColor, setBrushSize };
