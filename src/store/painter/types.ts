export interface PainterState {
  brushColor: string;
  brushSize: number;
}

export interface PainterAction extends PainterState {
  type: string;
}
