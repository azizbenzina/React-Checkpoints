import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {addTasks,} from '../reducers/reducer'
import {selectCount} from '../reducers/reducer'

function AddTasks() {
    const dispatch = useDispatch();
    const tasks = useSelector(selectCount);
    const [isDone, setIsDone] = useState('yes')
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTasks({id: tasks[tasks.length-1].id+1,description:description, isDone:isDone}))
    }
  return (
   <div className='add'>
      <div className="post card" >
        <div class="container">  
  <form id="contactus" action="" method="post" onSubmit={handleSubmit}>
    <h3>ADD TASK</h3>
    
 
    <fieldset>
      <input placeholder="is Done..." type="text" tabindex="2" autofocus required onChange={e => setIsDone(e.target.value)}/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your description here..." tabindex="5" required onChange={e => setDescription(e.target.value)}></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contactus-submit" data-submit="...Sending">Add Now</button>
    </fieldset>
  </form>
</div>
          </div>
   </div>
  )
}

export default AddTasks