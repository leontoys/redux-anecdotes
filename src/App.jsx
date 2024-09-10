import NewAnecdote from "./components/NewAnecdote"
import Anecdotes from "./components/Anecdotes"
import Filter from "./components/Filter";

const App = () => {
  return (
    <div>
      <Filter/>
      <Anecdotes/>
      <NewAnecdote/>
    </div>
  )
}

export default App