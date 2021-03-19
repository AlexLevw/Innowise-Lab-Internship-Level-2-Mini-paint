const toolbarCellTypes = {
  COLOR: "color",
  SIZE: "size",
};

const BRUSH_COLORS: string[] = [
  "black",
  "white",
  "green",
  "blue",
  "red",
  "yellow",
  "purple",
];

const BRUSH_SIZES: number[] = [2, 5, 10, 20, 30, 40, 50];

const actions = {
  SET_COLOR: "SET_COLOR",
  SET_SIZE: "SET_SIZE",
};

export default { BRUSH_COLORS, BRUSH_SIZES, toolbarCellTypes, actions };
