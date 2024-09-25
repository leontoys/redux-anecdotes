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

// Export the action creators
export const { showNotification, hideNotification } = notificationSlice.actions

// Export the reducer
export default notificationSlice.reducer
