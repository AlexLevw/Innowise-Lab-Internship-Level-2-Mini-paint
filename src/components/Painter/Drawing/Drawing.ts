import { painterConstants } from "@constants";

interface TouchPosition {
  x: number;
  y: number;
}

export default class Drawing {
  private container: HTMLElement;

  private ctx: CanvasRenderingContext2D;

  private canvasRect: DOMRect;

  private isTouching: boolean;

  private startTouchPosition: TouchPosition;

  private toolType: string;

  private toolColor: string;

  private brushSize: number;

  private savedImageData: ImageData;

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
    this.isTouching = false;
    this.toolType = painterConstants.BRUSH;
    this.toolColor = "black";
    this.brushSize = 10;
    this.savedImageData = {} as ImageData;
    this.startTouchPosition = { x: 0, y: 0 };

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

    this.setToolColor(this.toolColor);
    this.setBrushSize(this.brushSize);
  }

  public setToolColor(color: string): void {
    this.toolColor = color;
    this.ctx.strokeStyle = color;
    this.ctx.fillStyle = color;
  }

  public setBrushSize(size: number): void {
    this.brushSize = size;
    this.ctx.lineWidth = size;
  }

  public setToolType(tool: string): void {
    this.toolType = tool;
  }

  public getDrawingURL(): string {
    return this.ctx.canvas.toDataURL();
  }

  private getTouchPosition(e: MouseEvent | TouchEvent): TouchPosition {
    const touchPosition: TouchPosition =
      e instanceof MouseEvent
        ? {
            x: e.clientX - this.canvasRect.left,
            y: e.clientY - this.canvasRect.top,
          }
        : {
            x: e.changedTouches[0].clientX - this.canvasRect.left,
            y: e.changedTouches[0].clientY - this.canvasRect.top,
          };
    return touchPosition;
  }

  private touch(e: MouseEvent | TouchEvent): void {
    this.isTouching = true;
    this.startTouchPosition = this.getTouchPosition(e);
    this.saveCanvasImage();
    this.move(e);
  }

  private stopTouch(): void {
    this.isTouching = false;
    this.ctx.beginPath();
  }

  private saveCanvasImage(): void {
    this.savedImageData = this.ctx.getImageData(
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height
    );
  }

  private redrawCanvasImage(): void {
    this.ctx.putImageData(this.savedImageData, 0, 0);
  }

  private drawBrush(x: number, y: number): void {
    const { ctx, brushSize } = this;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();

    this.ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  private drawLine(x: number, y: number): void {
    const { ctx, brushSize } = this;

    this.redrawCanvasImage();

    ctx.beginPath();
    ctx.moveTo(this.startTouchPosition.x, this.startTouchPosition.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    this.ctx.arc(
      this.startTouchPosition.x,
      this.startTouchPosition.y,
      brushSize / 2,
      0,
      Math.PI * 2
    );
    this.ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  private drawRectangle(x: number, y: number): void {
    this.redrawCanvasImage();
    this.ctx.fillRect(
      this.startTouchPosition.x,
      this.startTouchPosition.y,
      -(this.startTouchPosition.x - x),
      -(this.startTouchPosition.y - y)
    );
  }

  private drawCircle(x: number, y: number): void {
    this.redrawCanvasImage();
    const positionDifferenceX = this.startTouchPosition.x - x;
    const positionDifferenceY = this.startTouchPosition.y - y;
    const radius: number = Math.sqrt(
      positionDifferenceX * positionDifferenceX +
        positionDifferenceY * positionDifferenceY
    );
    const startAngle = 0;
    const endAngle: number = Math.PI * 2;
    this.ctx.beginPath();
    this.ctx.arc(
      this.startTouchPosition.x,
      this.startTouchPosition.y,
      radius,
      startAngle,
      endAngle
    );
    this.ctx.fill();
  }

  private move(e: MouseEvent | TouchEvent): void {
    if (!this.isTouching) return;

    const { LINE, SHAPES } = painterConstants;
    const touchPosition: TouchPosition = this.getTouchPosition(e);

    switch (this.toolType) {
      case LINE:
        this.drawLine(touchPosition.x, touchPosition.y);
        break;
      case SHAPES.RECTANGLE:
        this.drawRectangle(touchPosition.x, touchPosition.y);
        break;
      case SHAPES.CIRCLE:
        this.drawCircle(touchPosition.x, touchPosition.y);
        break;
      default:
        this.drawBrush(touchPosition.x, touchPosition.y);
    }
  }
}
