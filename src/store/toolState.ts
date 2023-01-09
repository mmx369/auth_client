import { makeAutoObservable } from 'mobx'

class ToolState {
  tool = null
  constructor() {
    makeAutoObservable(this)
  }

  setTool(tool: any) {
    this.tool = tool
  }

  setFillColor(color: string) {
    //@ts-ignore
    this.tool.fillColor = color
  }

  setStrokeColor(color: string) {
    //@ts-ignore
    this.tool.strokeColor = color
  }

  setLineWidth(width: any) {
    //@ts-ignore
    this.tool.lineWidth = width
  }
}

export default new ToolState()
