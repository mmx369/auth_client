import Tools from './Tools'

export default class Line extends Tools {
  mouseDown: boolean | undefined
  startX!: number
  startY!: number
  saved!: string
  name: string
  currentX: number | undefined
  currentY: number | undefined

  constructor(canvas: any) {
    super(canvas)
    this.listen()
    this.name = 'Line'
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    this.canvas.onmouseup = this.mouseUpHandler.bind(this)
  }

  mouseDownHandler(e: any) {
    this.mouseDown = true
    this.currentX = e.pageX - e.target.offsetLeft
    this.currentY = e.pageY - e.target.offsetTop
    this.ctx.beginPath()
    this.ctx.moveTo(this.currentX, this.currentY)
    this.saved = this.canvas.toDataURL()
  }

  mouseUpHandler(e: any) {
    this.mouseDown = false
  }

  mouseMoveHandler(e: any) {
    if (this.mouseDown) {
      this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }
  }

  draw(x: number, y: number) {
    const img = new Image()
    img.src = this.saved
    img.onload = () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.beginPath()
      this.ctx?.moveTo(this.currentX!, this.currentY!)
      this.ctx?.lineTo(x, y)
      this.ctx?.stroke()
    }
  }
}
