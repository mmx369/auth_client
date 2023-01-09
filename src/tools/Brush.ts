import Tools from './Tools'

export default class Brush extends Tools {
  public mouseDown: boolean | undefined

  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
    this.listen()
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    this.canvas.onmouseup = this.mouseUpHandler.bind(this)
  }

  mouseUpHandler() {
    this.mouseDown = false
  }

  mouseDownHandler(e: MouseEvent) {
    this.mouseDown = true
    this.ctx?.beginPath()
    this.ctx?.moveTo(
      //@ts-ignore
      e.pageX - e.target.offsetLeft,
      //@ts-ignore
      e.pageY - e.target.offsetTop
    )
  }
  mouseMoveHandler(e: any) {
    if (this.mouseDown) {
      this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }
  }

  draw(x: number, y: number) {
    this.ctx?.lineTo(x, y)
    this.ctx?.stroke()
    console.log(`Draw brush`)
  }
}
