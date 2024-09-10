const filterReducer = (state = '',action) => {
    switch(action.type){
        case 'SET_FILTER':
            console.log("reached here")
            console.log("state",state)
            console.log("filter",action.payload)
            const filter = action.payload
            return action.payload
        default:
            console.log(state)
            return state 
    }
}

export const filterChange = filter => {
    return {
        type : 'SET_FILTER',
        payload : filter 
    }
}

export default filterReducer