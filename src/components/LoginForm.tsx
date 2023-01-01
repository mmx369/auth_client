import { observer } from 'mobx-react-lite'
import { FC, useContext, useState } from 'react'
import { Context } from '..'

const LoginForm: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { store } = useContext(Context)

  console.log(111, email, password)

  return (
    <>
      <div>
        <input
          type='text'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button onClick={() => store.login(email, password)}>Login</button>
      <button onClick={() => store.registration(email, password)}>
        Registration
      </button>
    </>
  )
}

export default observer(LoginForm)
