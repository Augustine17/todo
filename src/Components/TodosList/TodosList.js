import React from 'react'
import './TodosList.css'

export const TodosList = ({todos,check,remove}) => {
  return (
    <div className='list'>
    {todos.map((val,idx)=>{
        return(
            <div className='todo' key={idx}>
                <input type="checkbox" className='todoCheck' checked={val.completed} onChange={()=>check(val.id)}/>
                <p className={val.completed ? "underline" : "normal"}>{val.task}</p>
                <button class="btn remove-btn" type="button" onClick={()=>remove(val.id)}>delete</button>
            </div>
            )
    })}
    </div>
  )
}
