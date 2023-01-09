import { observer } from 'mobx-react-lite'
import { FC, useEffect, useRef } from 'react'
import canvasState from '../../store/canvasState'
import toolState from '../../store/toolState'

import '../../styles/canvas.scss'
import Brush from '../../tools/Brush'

export const Canvas: FC = observer(() => {
  const canvasRef = useRef()

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current)
    toolState.setTool(new Brush(canvasRef.current!))
  }, [])

  const mouseDownHandler = () => {
    //@ts-ignore
    canvasState.pushToUndo(canvasRef.current?.toDataURL())
  }

  return (
    <div className='canvas'>
      <canvas
        onMouseDown={() => mouseDownHandler()}
        ref={canvasRef as any}
        width={600}
        height={400}
      />
    </div>
  )
})
