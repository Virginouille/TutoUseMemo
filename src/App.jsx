import { useReducer } from 'react'


function reducer(state, action) {
  if (action.type === 'REMOVE_TODO') {
    return {
      ...state,
      todos: state.todos.filter(todo => todo !== action.payload)
    }
  }
  if (action.type === 'TOGGLE_TODO') {
    return {
      ...state,
      todos: state.todos.map(todo => todo === action.payload ? {
        ...todo,
        checked: !todo.checked
      } : todo)
    }
  }
  if (action.type === 'CLEAR_COMPLETED') {
    return {
      ...state,
      todos: state.todos.filter(todo => todo === action.payload ? {
        ...todo,
        checked: !todo.checked
      } : todo)
    }
  }
  return state
}


function App() {

  const [state, dispatch] = useReducer(reducer, {
    todos: [{
      name: 'faire les courses',
      checked: false
    }, {
      name: 'ranger les courses',
      checked: false
    }, {
      name: 'faire à manger',
      checked: false
    }]
  })

  return <div>
    <ul>
      {state.todos.map(todo => (<li
        key={todo.name}
      >
        <input type="checkbox" onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo })} checked={todo.checked}></input>
        {todo.name}
        <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo })}>Supprimer</button>
      </li>))}
    </ul>
    <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>Supprimer les tâches accomplies</button>
  </div>

}

export default App
