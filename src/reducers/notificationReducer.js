import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: { notification: '', display:"none" }, // Update initial state
    reducers: {
        showNotification(state, action) {
            state.notification = action.payload // Set the notification message
            state.display = "block" // Show the notification
        },
        hideNotification(state) {
            state.notification = '' // Clear the notification message
            state.display = "none" // Hide the notification
        }
    }
})

export const setNotification = (message, delay) => {
    return (dispatch) => {
        const delayInSec = delay * 1000
        dispatch(showNotification(message)) // Show the notification
        setTimeout(() => {
            dispatch(hideNotification()) // Hide notification after 3 seconds
        }, delayInSec)     
    }
} 

// Export the action creators
export const { showNotification, hideNotification } = notificationSlice.actions

// Export the reducer
export default notificationSlice.reducer
