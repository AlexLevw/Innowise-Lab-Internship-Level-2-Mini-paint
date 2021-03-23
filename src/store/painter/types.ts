export interface PainterState {
  toolColor: string;
  brushSize: number;
  toolType: string;
}

export interface PainterAction extends PainterState {
  type: string;
}
