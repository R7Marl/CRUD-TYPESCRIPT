import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice';
import { loadState, saveData } from './localStorage';

const persitenceState = loadState();

const store = configureStore({
    reducer: {
        users: userSlice
    },
    preloadedState: persitenceState
});

store.subscribe(() => {
    saveData(store.getState());
})
export default store;