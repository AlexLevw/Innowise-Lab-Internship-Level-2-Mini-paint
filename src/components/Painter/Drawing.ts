import { painterConstants } from "@constants";

export default class Drawing {
  private container: HTMLElement;

  private ctx: CanvasRenderingContext2D;

  private canvasRect: DOMRect;

  private isPainting: boolean;

  private toolType: string;

  private toolColor: string;

  private brushSize: number;

  constructor(canvasElem: HTMLCanvasElement) {
    const canvas: HTMLCanvasElement = canvasElem;
    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

    if (!ctx || !(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error("Failed to get 2D context");
    } else if (!canvas.parentElement) {
      throw new Error("Failed to get container");
    }

    this.container = canvas.parentElement;
    this.ctx = ctx;
    this.canvasRect = canvas.getBoundingClientRect();
    this.isPainting = false;
    this.toolType = painterConstants.BRUSH;
    this.toolColor = "black";
    this.brushSize = 10;

    canvas.addEventListener("mousedown", this.touch.bind(this));
    canvas.addEventListener("touchstart", this.touch.bind(this));
    canvas.addEventListener("mouseup", this.stopTouch.bind(this));
    canvas.addEventListener("touchend", this.stopTouch.bind(this));
    canvas.addEventListener("mousemove", this.move.bind(this));
    canvas.addEventListener("touchmove", this.move.bind(this));

    this.ctx.canvas.width = this.container.offsetWidth;
    this.ctx.canvas.height = this.container.offsetHeight;
    this.canvasRect = this.ctx.canvas.getBoundingClientRect();

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  public setToolColor(color: string): void {
    this.toolColor = color;
  }

  public setBrushSize(size: number): void {
    this.brushSize = size;
  }

  public setToolType(tool: string): void {
    this.toolType = tool;
  }

  public getDrawingURL(): string {
    return this.ctx.canvas.toDataURL();
  }

  private touch(e: MouseEvent | TouchEvent) {
    this.isPainting = true;
    this.move(e);
  }

  private stopTouch() {
    this.isPainting = false;
    this.ctx.beginPath();
  }

  private move(e: MouseEvent | TouchEvent) {
    if (this.isPainting) {
      const { ctx, toolType, toolColor, brushSize, canvasRect } = this;
      const { BRUSH, SHAPES } = painterConstants;

      const putPosition =
        e instanceof MouseEvent
          ? {
              x: e.clientX - canvasRect.left,
              y: e.clientY - canvasRect.top,
            }
          : {
              x: e.changedTouches[0].clientX - canvasRect.left,
              y: e.changedTouches[0].clientY - canvasRect.top,
            };

      ctx.strokeStyle = toolColor;
      ctx.fillStyle = toolColor;
      ctx.lineWidth = brushSize;

      if (toolType === BRUSH) {
        ctx.lineTo(putPosition.x, putPosition.y);
        ctx.stroke();
        ctx.beginPath();

        this.ctx.arc(
          putPosition.x,
          putPosition.y,
          brushSize / 2,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(putPosition.x, putPosition.y);
      } else if (toolType === SHAPES.RECTANGLE) {
        ctx.fillRect(putPosition.x, putPosition.y, 20, 20);
      } else if (toolType === SHAPES.CIRCLE) {
        this.ctx.arc(
          putPosition.x,
          putPosition.y,
          brushSize / 2,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
  }
}
