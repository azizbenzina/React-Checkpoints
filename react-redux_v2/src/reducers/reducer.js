import { createSlice } from '@reduxjs/toolkit';
export const initialState = {
  tasks: [{
    id:1, 
    description:'todo 1', 
    isDone:'done'
  }],
};
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTasks: (state, action) => {
        state.tasks= [...state.tasks, action.payload]
    },
    deleteTask: (state, action) => {
      state.tasks=state.tasks.filter((task) => task.id !== action.payload.id);
    },
    filterTask: (state, action) => {
      state.tasks=state.tasks.filter((task) => task.isDone === action.payload.isDone);
    },
    notDoneTask: (state, action) => {
      state.tasks=state.tasks.filter((task) => task.isDone === action.payload.isDone);
    },
    editTasks: (state, action) => {
      state.tasks.map((task) => {
        if(task.id === action.payload.id){
          task.description=action.payload.description;
          task.isDone=action.payload.isDone;
      }});  },
  },
});
export const selectCount = (state) => state.task.tasks
export const { addTasks, deleteTask,editTasks,filterTask,notDoneTask } = taskSlice.actions;
export default taskSlice.reducer;