import React, { useState } from 'react'
import {selectCount} from '../reducers/reducer'
import { useSelector,useDispatch } from 'react-redux';
import {deleteTask,editTasks,filterTask,notDoneTask} from '../reducers/reducer'

function ListTask() {
    const tasks = useSelector(selectCount);
    const dispatch = useDispatch();
    const [isDone, setIsDone] = useState('')
    const [description, setDescription] = useState('');

  return (
    <div>
          <h1 align='center'>TASK LIST</h1>
          <div class="text-center"> <button type="button" align='center' class="btn btn-outline-info text-center" onClick={()=>{
          dispatch(filterTask({isDone: 'done'}))
        }}>#done</button> <button type="button" align='center' class="btn btn-outline-info text-center" onClick={()=>{
          dispatch(filterTask({isDone: 'not'}))
        }}>#not done</button></div>
    {tasks.map(t => {
return (
  <div  className='listTask'>
  
<div class="container mt-5">

<div class="row d-flex justify-content-center ">

  <div class="col-md-6">

      <div class="card" >
        
        <div class="list border-bottom">
          <i class="fa fa-fire"></i>
          <div class="d-flex flex-column ml-3">
            <span>{t.id}</span> 
            <small>#ID</small>
          </div>                   
        </div>

        <div class="list border-bottom">

          <i class="fa fa-yelp"></i>
          <div class="d-flex flex-column ml-3">
            <span>{t.description}</span> 
            <small>#DESCRIPTION</small>
          </div>                   
        </div>

        <div class="list border-bottom">

          <i class="fa fa-fire"></i>
          <div class="d-flex flex-column ml-3">
            <span>{t.isDone.toString()}</span> 
            <small>#ISDONE</small>
          </div>                   
        </div>
        <button type="button" class="btn btn-danger btn-sm" onClick={()=>{
          dispatch(deleteTask({id: t.id}))
        }}>Delete</button>
       <br />
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter new description" onChange={e => setDescription(e.target.value)}/>
    <small id="emailHelp" class="form-text text-muted">Edit Description.</small>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter new isDone" onChange={e => setIsDone(e.target.value)}/>
    <small id="emailHelp" class="form-text text-muted">Edit IsDone.</small>
    <button type="button" class="btn btn-primary btn-sm" onClick={()=>{
          dispatch(editTasks({id: t.id,description:description,isDone:isDone}))
        }}>Update</button>
        </div>
    
  </div>
  
</div>

</div>
</div>
)
})}

</div>  )
}

export default ListTask