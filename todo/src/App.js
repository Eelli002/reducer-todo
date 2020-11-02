import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import ToDoList from './Components/ToDoList';
import ToDoForm from './Components/ToDoForm';
import './App.css';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <ToDoList state={state} dispatch={dispatch} />
      <ToDoForm dispatch={dispatch} /> 
    </div>
  );
}

export default App;
