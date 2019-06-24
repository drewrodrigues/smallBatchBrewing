import { ADD_GRAIN } from "../../actions/grainActions"

export default function grainsReducer(oldState = [], action) {
  const newState = Object.assign([], oldState)
  switch (action.type) {
    case ADD_GRAIN:
      newState.push(action.grain)
      return newState
    default:
      return oldState
  }
}