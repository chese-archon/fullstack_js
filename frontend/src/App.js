//import logo from './logo.svg';
//import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

// frontend/src/App.js

/*import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './App.css';
 
function App() {
  const [todoItems, setTodoItems] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:3010/api/todo-items')
      .then((res) => res.json())
      .then((result) => setTodoItems(result.data));
  }, []);
 
  return (
    <div>
      {todoItems.map((item) => (
        <Form.Group key={item.id} className="app__todo-item">
          <Form.Check type="checkbox" checked={item.done} />
          <Form.Control type="text" value={item.text} />
        </Form.Group>
      ))}
    </div>
  );
}
 
export default App;*/

import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './App.css';

function App() {
  const [todoItems, setTodoItems] = useState([]);
 
  /*useEffect(() => {
    fetch('http://localhost:3010/api/todo-items')
      .then((res) => res.json())
      .then((result) => setTodoItems(result.data));
  }, []);*/
  useEffect(() => {
    fetch('http://localhost:3010/api/todo-items')
      .then((res) => res.json())
      .then((result) => setTodoItems(result.data));
  }, []);
 
  return (
    <div>
      {todoItems.map((item) => (
        <Form.Group key={item.id} className="app__todo-item">
          <Form.Check type="checkbox" checked={item.done} />
          <Form.Control type="text" value={item.text} />
        </Form.Group>
      ))}
    </div>
  );
}

export default App;