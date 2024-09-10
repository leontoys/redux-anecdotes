import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"

const NewAnecdote = ()=>{
const dispatch = useDispatch()

//create anecdote by dispatching action to reducer
//this is copied over from App.js
const addAnecdote = (event)=>{
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(anecdote))
}  


return(
    <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div><input name='anecdote'></input></div>
            <button type='submit'>create</button>
        </form>
    </div>
)
}

export default NewAnecdote