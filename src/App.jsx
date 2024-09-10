import { useSelector, useDispatch } from 'react-redux'
import { upVote, createAnecdote } from './reducers/anecdoteReducer'
import NewAnecdote from "./components/NewAnecdote";

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    //console.log('vote', id)
    dispatch(upVote(id))
  } 

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <NewAnecdote/>
    </div>
  )
}

export default App