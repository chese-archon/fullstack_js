import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './App.css';

function App() {
  const [todoItems, setTodoItems] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:3010/api/todo-items')
      .then((res) => res.json())
      .then((result) => setTodoItems(result.data));
  }, []);
 
  /*useEffect(() => {
    const fetchData = async () => {
    try {
    const res = await fetch('http://localhost:3010/api/todo-items');
    if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
    }
    const result = await res.json();
    setTodoItems(result.data);
    } catch (error) {
    console.error("Error fetching data:", error.message);
    }
    };
    
    fetchData();
    }, []);*/
    const handleChecboxChange = (id) => {
      setTodoItems((prevItems) => prevItems.map((item) => item.id === item.id ? {...item, done: !item.done} :item
    )
  );
    };

  return (
    <div>
      {todoItems.map((item) => (
        <Form.Group key={item.id} className="app__todo-item">
          <Form.Check type="checkbox" checked={item.done} onChange={() => handleChecboxChange(item.id)}/>
          <Form.Control type="text" value={item.text} />
        </Form.Group>
      ))}
    </div>
  );
}

export default App;