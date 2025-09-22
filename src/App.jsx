import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { Input } from './components/Input'
import { useIncrement } from './hooks/useIncrement'
import { useDocumentTitle } from './hooks/useDocumentTitle'

function App() {

  const [count, increment, decrement] = useIncrement(0)

  const [name, setName] = useState('')
  useDocumentTitle(name ? `Editer + ${name}` : null)

  return <div>
    <Input value={name} onChange={setName} label="Nom" />
    Compteur: {count}
    <button onClick={increment}>Incrémenter</button>
    <button onClick={decrement}>Décrémenter</button>
  </div>
}

export default App
