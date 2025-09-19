import { useState } from 'react'
import { Input } from './components/Input'

function App() {

  const [firstname, setFirstname] = useState('John')
  const [password, setPassword] = useState('Mot de passe')
  const security = passwordSecurity(password)

  return <div className='container my-3 vstack gap-2'>
    <Input
      label="Nom d'utilisateur"
      value={firstname}
      onChange={setFirstname}
    />

    <div>
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />
    </div>

    Sécurité : {security}
  </div>
}

export default App
