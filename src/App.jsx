import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { Input } from './components/Input'

/**
 * 
 * @param {boolean} initial 
 */

function useToggle(initial = false) {
  const [state, setState] = useState(initial)
  const toggle = () => setState(v => !v)
  return [state, toggle]
}

function App() {

  return <div>Hook personnalisé</div>
}

export default App
