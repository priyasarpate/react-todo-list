import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import './components/Todo.css';
function App() {


  return (
    <div className="ToDo-App">
      <TodoList />
    {/* <ToDoForm /> */}
    </div>
  );
}

export default App;

