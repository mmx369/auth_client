import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { Context } from '.'
import { CanvasApp } from './components/canvas/CanvasApp'
import LoginForm from './components/LoginForm'
import { IUser } from './models/IUser'
import UserService from './sevices/UserService'

import './styles/app.scss'

const App = () => {
  const { store } = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers()
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (store.isLoading) {
    return <div>Loading...</div>
  }

  if (!store.isAuth) {
    return (
      <div>
        <LoginForm />
        <button onClick={getUsers}>Get Users</button>
        {users.map((user) => (
          <div key={user.email}>{user.email}</div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h2>
        {store.isAuth
          ? `User ${store.user.email} logged in`
          : `User not logged in`}
      </h2>
      <h4>
        {store.user.isActivated ? 'Account activated' : 'Account not activated'}
      </h4>
      <button onClick={() => store.logout()}>Logout</button>
      <div>
        <button onClick={getUsers}>Get Users</button>
        {users.map((user) => (
          <div key={user.email}>{user.email}</div>
        ))}
      </div>
      <div style={{ border: 'solid 1px black' }}>
        <CanvasApp />
      </div>
    </div>
  )
}

export default observer(App)
