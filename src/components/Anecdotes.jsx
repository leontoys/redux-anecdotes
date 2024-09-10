import { useSelector, useDispatch } from "react-redux"
import { upVote } from "../reducers/anecdoteReducer"

const Anecdotes = () => {
    const currentState = useSelector(state => console.log("state",state))
    //const anecdotes = useSelector(state => state.anecdotes)
    //use filter 
    const anecdotes = useSelector(state=>{
        console.log("state filter", state.filter)
        if(state.filter === ''){
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

    const vote = (id) => {
        dispatch(upVote(id))
    }

    return(
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={()=>vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )

}

export default Anecdotes