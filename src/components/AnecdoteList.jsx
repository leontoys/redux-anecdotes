import { useSelector, useDispatch } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"
import Notification from "./Notification"
import { showNotification, hideNotification, setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

    //use filter 
    const anecdotes = useSelector(state=>{
        console.log("state filter", state.filter)
        if(state.filter === 'ALL'){ //initially filter will be blank
            console.log("state anecdotes",state.anecdotes)
            return state.anecdotes
        }
        else{
            const filter = state.filter
            let result = state.anecdotes.filter( anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
            console.log("result",result)
            return state.anecdotes.filter( anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
        }
    })

    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(addVote(anecdote.id))
        dispatch(setNotification(`you voted '${anecdote.content}'`,3))        
    }

    return(
        <div>
            <h2>Anecdotes</h2>
            <Notification></Notification>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={()=>vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )

}

export default AnecdoteList