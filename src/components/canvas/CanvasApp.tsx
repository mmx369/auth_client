import '../../styles/app.scss'
import { Canvas } from './Canvas'
import { SettingBar } from './SettingBar'
import { Toolbar } from './Toolbar'

export const CanvasApp = () => {
  return (
    <div className='app'>
      <Toolbar />
      <SettingBar />
      <Canvas />
    </div>
  )
}
