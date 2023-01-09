import { makeAutoObservable } from 'mobx'

class CanvasState {
  canvas = null
  undoList = [] as string[]
  redoList = [] as any[]
  constructor() {
    makeAutoObservable(this)
  }

  setCanvas(canvas: any) {
    this.canvas = canvas
  }

  pushToUndo(data: string) {
    this.undoList.push(data)
  }
  pushToRedo(data: string) {
    this.redoList.push(data)
  }

  undo() {
    //@ts-ignore
    let ctx = this.canvas.getContext('2d')
    if (this.undoList.length > 0) {
      let dataUrl = this.undoList.pop()
      //@ts-ignore
      this.redoList.push(this.canvas.toDataURL())
      let img = new Image()
      img.src = dataUrl!
      img.onload = () => {
        //@ts-ignore
        ctx.clearRect(0, 0, this.canvas?.width, this.canvas?.height)
        //@ts-ignore
        ctx.drawImage(img, 0, 0, this.canvas?.width, this.canvas?.height)
      }
    } else {
      //@ts-ignore
      ctx.clearRect(0, 0, this.canvas?.width, this.canvas?.height)
    }
  }
  redo() {
    //@ts-ignore
    let ctx = this.canvas.getContext('2d')
    if (this.redoList.length > 0) {
      let dataUrl = this.redoList.pop()
      //@ts-ignore
      this.undoList.push(this.canvas.toDataURL())
      let img = new Image()
      img.src = dataUrl!
      img.onload = () => {
        //@ts-ignore
        ctx.clearRect(0, 0, this.canvas?.width, this.canvas?.height)
        //@ts-ignore
        ctx.drawImage(img, 0, 0, this.canvas?.width, this.canvas?.height)
      }
    }
  }
}

export default new CanvasState()
