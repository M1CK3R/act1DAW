import {createSlice} from '@reduxjs/toolkit';

// s%.%0Qee

export const goalsSlice = createSlice({
    name:'goals',
    initialState: {
        value: [{
            'nombre': 'Metas',
            'descripcion': 'Galileo',
            'fecha': '08/12/2024',
            'id': 1
            }
        ]
    },
    reducers:{
        addGoal: (state, action) => {
            state.value.push(action.payload);
            fetch("http://localhost:3001/goals/addGoals",{
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
        deleteGoal: (state, action) => {
            fetch(`http://localhost:3001/goals/removeGoals/${action.payload}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"dawtds"
                }
            }).catch((err)=>{
                console.log(err);
            })
            state.value = state.value.filter((goal) => goal.id !== action.payload);
        },
        setGoals: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {addGoal, deleteGoal, setGoals} = goalsSlice.actions;

export const addGoalAsync = (goal) => (dispatch) => {
    fetch("http://localhost:3001/goals/addGoals",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"dawtds"
                },
                body:JSON.stringify(goal)
            })
            .then(response => response.json())
            .then(data => {
                dispatch(setGoals([...data]));
            })
            .catch((err)=>{
                console.log(err);
            })
}



export default goalsSlice.reducer;