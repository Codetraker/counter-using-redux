// import { createStore } from "redux";
import {createSlice , configureStore} from '@reduxjs/toolkit';

const initialState = {counter : 0 , showCounter : true};
// const counterReducer = (state = initialState ,action) =>{
//     if(action.type === 'increment'){
//         return {
//             counter : state.counter+1,
//             showCounter : state.showCounter
//         }
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter : state.counter-1,
//             showCounter : state.showCounter
//         }
//     }
//     if(action.type === 'increase'){
//         return {
//             counter : state.counter + action.amount,
//             showCounter : state.showCounter
//         }
//     }
//     if(action.type === 'toggle'){
//         return {
//             counter : state.counter,
//             showCounter : !state.showCounter
//         }
//     }
//     return state;
// };

// const store = createStore(counterReducer);

const counterSlice = createSlice({
    name: 'counter' ,
    initialState ,
    reducers : {
        increment(state){
            state.counter++;
        } ,
        decrement(state){
            state.counter--;
        } ,
        increase(state , action){
            state.counter = state.counter + action.payload;
        } ,
        toggleCounter(state){
            state.counter = !state.counter;
        }
    }
});
const initialAuth = {isAuthanticated : false};
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuth,
    reducers : {
        login(state){
            state.isAuthanticated = true;
        },
        logout(state){
            state.isAuthanticated = false;
        }
    }
});

const store = configureStore({
    reducer:{
        counter: counterSlice.reducer,
        auth : authSlice.reducer    
    }
});
export default store;
export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;