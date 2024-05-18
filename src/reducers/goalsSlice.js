import {createSlice} from '@reduxjs/toolkit';

export const goalsSlice = createSlice({
    name:'goals',
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
        addGoal: (state, action) => {
            state.value.push({
                'nombre': action.payload.nombre,
                'descripcion': action.payload.descripcion,
                'fecha': action.payload.fecha,
                'id': state.value.length + 1
            });
    
        },
        deleteGoal: (state, action) => {
            console.log(action);
            state.value = state.value.filter((goal) => goal.id !== action.payload);
            console.log(state.value)
            
        }
    }
})

export const {addGoal, deleteGoal} = goalsSlice.actions;
export default goalsSlice.reducer;