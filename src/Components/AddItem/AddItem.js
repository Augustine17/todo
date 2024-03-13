import React,{useState} from 'react'

import './AddItem.css'



export const AddItem = ({addTodo}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        addTodo(inputValue);
        setInputValue("")
      };

  return (
     <form onSubmit={handleSubmit} className='form_control'>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Add Item</button>
    </form>
  )
}
