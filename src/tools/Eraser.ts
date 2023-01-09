import Brush from './Brush'

export default class Eraser extends Brush {
  canvas!: HTMLCanvasElement
  ctx!: CanvasRenderingContext2D

  constructor(canvas: any) {
    super(canvas)
  }

  draw(x: number, y: number): void {
    this.ctx!.strokeStyle = 'white'
    this.ctx.lineTo(x, y)
    this.ctx.stroke()
  }
}
