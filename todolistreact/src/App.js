import './App.css';
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function App() {
  const trash = <FontAwesomeIcon icon={faTrash} />
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([])
  return (
    <div class="container">
        <h1> To Do List </h1>
        <div class="search">
            <div>
                <input 
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setTodos(todos.concat(inputValue));
                    setInputValue("");
                  }
                }}
                placeholder="Add to list"/>
            </div>
        </div>
        <div class="li-container">
            <ul>
              {todos.map((item, index) => (
               <li>
                <p>
                {item}{" "} 
                </p>
                <button
                className='btn-delete'
                onClick={()=> setTodos(todos.filter((t, currentIndex)=> index != currentIndex))}>{trash}</button>
               </li>
              ))}
 
            </ul>
        </div>
        <div class="task">
            <p>{todos.length} Pending tasks</p>
        </div>
    </div>
  );
}

export default App;
