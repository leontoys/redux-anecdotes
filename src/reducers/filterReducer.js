import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name : 'filter',
    initialState : '',
    reducers : {
        filterChange(state,action){
            if (action.payload !== undefined){
            return action.payload
            }
            return state
        }
    }
})

//export action creator
export const { filterChange } = filterSlice.actions

//export reducer
export default filterSlice.reducer