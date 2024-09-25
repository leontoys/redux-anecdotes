import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name : 'filter',
    initialState : 'ALL',
    reducers : {
        filterChange(state,action){
            return action.payload
        }
    }
})

//export action creator
export const { filterChange } = filterSlice.actions

//export reducer
export default filterSlice.reducer