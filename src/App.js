import { useState } from 'react';
import './App.css';

import { AddItem } from './Components/AddItem/AddItem';
import { TodosList } from './Components/TodosList/TodosList';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos,setTodos] = useState(() => {
        const savedData = JSON.parse(localStorage.getItem('todos'));
        return savedData || [];
      })
  
  const addTodo = (val) =>{
    if(val ===""){
      toast.error("Please Provide Value!!");
      return;
    }
    const newData = {
      task:val,
      id: Date.now(),
      completed:false
    }

    setTodos(prevData=>{
      const updatedTodos = [...prevData,newData];
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    })

    console.log(todos)
  }

  const handleComplete = (id) => {

    let newData = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });

    toast.success("List Updated!!");

    localStorage.setItem("todos", JSON.stringify(newData));
    setTodos(newData);
  }

  const handeDelete = (id) =>{
    toast.success("Item Deleted");
    let newData = todos.filter((item) => item.id !== id);
    localStorage.setItem("todos", JSON.stringify(newData));
    setTodos(newData);
  }


  return (
    <div className="App">
      <h4>Grocer Bud</h4>
      <AddItem addTodo={addTodo}/>
      {todos.length === 0 ? null : <TodosList todos={todos} check={handleComplete} remove={handeDelete}/>}
      <ToastContainer />
    </div>
  );
}

export default App;
