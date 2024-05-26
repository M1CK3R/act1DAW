import {createSlice} from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name:'tasks',
    initialState: {
        value: [{
            'nombre': 'Tareas',
            'descripcion': 'Galileo',
            'fecha': '08/12/2024',
            'id': 1
            }
        ]
    },
    reducers:{
        addTask: (state, action) => {
            console.log(action)
            state.value.push(action.payload);
            fetch("http://localhost:3001/tasks/addTasks",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"dawtds"
                },
                body:JSON.stringify(action.payload)
            }).catch((err)=>{
                console.log(err);
            })
        },
        deleteTask: (state, action) => {
            fetch(`http://localhost:3001/tasks/removeTasks/${action.payload}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"dawtds"
                }
            }).catch((err)=>{
                console.log(err);
            })
            state.value = state.value.filter((task) => task.id !== action.payload);
        },
        setTasks: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {addTask, deleteTask, setTasks} = tasksSlice.actions;

export const addTaskAsync = (task) => (dispatch) => {
    fetch("http://localhost:3001/tasks/addTasks",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"dawtds"
                },
                body:JSON.stringify(task)
            })
            .then(response => response.json())
            .then(data => {
                dispatch(setTasks([...data]));
            })
            .catch((err)=>{
                console.log(err);
            })
}



export default tasksSlice.reducer;