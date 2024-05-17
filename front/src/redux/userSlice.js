import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    userData: [],
    turns: [],
}   



export const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setUserTurns: (state, action) => {
            state.turns = action.payload;
        }
    }
})
console.log(initialState);
export const { setUserData, setUserTurns, addTurn } = users.actions;
export default users.reducer;