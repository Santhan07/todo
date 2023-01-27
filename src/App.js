import './App.css';
import inputArea from './components/inputArea';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([])

  const addItems = (inputText)=>{
    setItems((prevItems)=>{
      return [...prevItems,inputText]
    })
  }

  console.log(items)
  return (
    <div className="container">
    <div classname="heading">
      <h1>To-Do List</h1>
    </div>
    <inputArea addItems={addItems} />
    </div>
  );
}

export default App;
