export default class Drawing {
  private container: HTMLElement;

  private ctx: CanvasRenderingContext2D;

  private canvasRect: DOMRect;

  private isPainting: boolean;

  private brushColor: string;

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
    this.brushColor = "black";
    this.brushSize = 10;

    canvas.addEventListener("mousedown", this.touch.bind(this));
    canvas.addEventListener("touchstart", this.touch.bind(this));
    canvas.addEventListener("mouseup", this.stopTouch.bind(this));
    canvas.addEventListener("touchend", this.stopTouch.bind(this));
    canvas.addEventListener("mousemove", this.putPoint.bind(this));
    canvas.addEventListener("touchmove", this.putPoint.bind(this));

    this.ctx.canvas.width = this.container.offsetWidth;
    this.ctx.canvas.height = this.container.offsetHeight;
    this.canvasRect = this.ctx.canvas.getBoundingClientRect();

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  private touch(e: MouseEvent | TouchEvent) {
    this.isPainting = true;
    this.putPoint(e);
  }

  private stopTouch() {
    this.isPainting = false;
    this.ctx.beginPath();
  }

  private putPoint(e: MouseEvent | TouchEvent) {
    if (this.isPainting) {
      const putPositionX =
        (e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX) -
        this.canvasRect.left;

      const putPositionY =
        (e instanceof MouseEvent ? e.clientY : e.changedTouches[0].clientY) -
        this.canvasRect.top;

      this.ctx.lineWidth = this.brushSize;
      this.ctx.lineTo(putPositionX, putPositionY);
      this.ctx.strokeStyle = this.brushColor;
      this.ctx.stroke();
      this.ctx.beginPath();

      this.ctx.arc(
        putPositionX,
        putPositionY,
        this.brushSize / 2,
        0,
        Math.PI * 2
      );
      this.ctx.fillStyle = this.brushColor;
      this.ctx.fill();
      this.ctx.beginPath();
      this.ctx.moveTo(putPositionX, putPositionY);
    }
  }

  public setBrushColor(color: string): void {
    this.brushColor = color;
  }

  public setBrushSize(size: number): void {
    this.brushSize = size;
  }

  public getDrawingURL(): string {
    return this.ctx.canvas.toDataURL();
  }
}
