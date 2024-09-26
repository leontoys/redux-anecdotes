import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import anecdoteService from "../services/anecdotes"

const AnecdoteForm  = ()=>{
const dispatch = useDispatch()

//create anecdote by dispatching action to reducer
//this is copied over from App.js
const addAnecdote = async (event)=>{
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(anecdote)
    console.log("new anecdote",newAnecdote)   
    dispatch(createAnecdote(newAnecdote))    
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

export default AnecdoteForm 