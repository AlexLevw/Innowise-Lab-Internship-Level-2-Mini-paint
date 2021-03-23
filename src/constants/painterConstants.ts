const TOOL_COLORS: string[] = [
  "black",
  "white",
  "green",
  "blue",
  "red",
  "yellow",
  "purple",
];

const BRUSH_SIZES: number[] = [2, 5, 10, 20, 30, 40, 50];

const SHAPES = {
  RECTANGLE: "RECTANGLE",
  CIRCLE: "CIRCLE",
};

const BRUSH = "BRUSH";

const actions = {
  SET_COLOR: "SET_COLOR",
  SET_SIZE: "SET_SIZE",
  SET_TOOL_TYPE: "SET_TOOL_TYPE",
};

export default { TOOL_COLORS, BRUSH_SIZES, SHAPES, BRUSH, actions };
