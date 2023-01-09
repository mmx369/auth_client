export default class Tools {
  public canvas: HTMLCanvasElement
  public ctx: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  }

  set fillColor(color: string) {
    this.ctx.fillStyle = color
  }

  set strokeColor(color: string) {
    this.ctx.strokeStyle = color
  }

  set lineWidth(width: number) {
    this.ctx.lineWidth = width
  }

  destroyEvents() {
    this.canvas.onmousemove = null
    this.canvas.onmousedown = null
    this.canvas.onmouseup = null
  }
}
