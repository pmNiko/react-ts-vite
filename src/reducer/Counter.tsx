import * as React from "react"
import { useReducer } from "react"

const initialState = {
  counter: 0,
}

type ActionType =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "custom"; payload: number }

const counterReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter++,
      }
    case "decrement":
      return {
        ...state,
        counter: state.counter--,
      }
    case "custom":
      return {
        ...state,
        counter: action.payload,
      }

    default:
      return state
  }
}

const Counter = () => {
  const [{ counter }, dispatch] = useReducer(counterReducer, initialState)

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button type="button" onClick={() => dispatch({ type: "decrement" })}>
        Less
      </button>
      <button type="button" onClick={() => dispatch({ type: "increment" })}>
        Add
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "custom", payload: 35 })}
      >
        Custom
      </button>
    </div>
  )
}

export default Counter
