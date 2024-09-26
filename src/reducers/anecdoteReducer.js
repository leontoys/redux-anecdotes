/* eslint-disable no-case-declarations */

import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name : 'anecdotes',
  initialState : [],//initialState,
  reducers : {
    upVote(state,action){
      const id = action.payload
      const voteToChange = state.find( n => n.id === id )
      const changedVote = {
        ...voteToChange,
        votes : voteToChange.votes + 1
      }
      return state.map( anecdote => 
        anecdote.id != id ? anecdote : changedVote
      ).sort((a,b)=>b.votes-a.votes)

    },
    appendAnecdote(state, action) {      
      state.push(action.payload)    
    },
    setAnecdotes(state, action) {
      return action.payload
    }     
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    anecdotes.sort((a,b)=>b.votes-a.votes)
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const addVote = id => {
  return async dispatch => { 
    //get all
    const anecdotes = await anecdoteService.getAll()  
    //find the one to change
    const voteToChange = anecdotes.find( n => n.id === id )      
    //add one vote
    const changedVote = {
      ...voteToChange,
      votes : voteToChange.votes + 1
    }  
    //await response from axios
    const newAnecdote = await anecdoteService.update(id,changedVote)
    console.log("new",newAnecdote)
    //update the list
    const updatedAnecdotes = anecdotes.map( anecdote => 
      anecdote.id != id ? anecdote : newAnecdote
    ).sort((a,b)=>b.votes-a.votes)
    //update state
    dispatch(setAnecdotes(updatedAnecdotes))
  }
}

export const {upVote,appendAnecdote,setAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer