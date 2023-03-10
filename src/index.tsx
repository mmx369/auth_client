import { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Store from './store/store'

interface State {
  store: Store
}
const store = new Store()

console.log(1122, store)

export const Context = createContext<State>({
  store,
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Context.Provider value={{ store }}>
    <App />
  </Context.Provider>
)
