import { configureStore } from "@reduxjs/toolkit"
import filterReducer from "./reducers/filterReducer"
import anecdoteReducer from "./reducers/anecdoteReducer"

const store = configureStore({
    reducer : {
        anecdotes : anecdoteReducer,
        filter : filterReducer
    }
})

console.log(store.getState())

export default store