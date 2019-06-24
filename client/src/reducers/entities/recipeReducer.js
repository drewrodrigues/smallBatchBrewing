import { UPDATE_MULTIPLIER } from "../../actions/recipeActions"

export default function recipeReducer(oldState = {}, action) {
  const newState = Object.assign({}, oldState)
  
  switch (action.type) {
    case UPDATE_MULTIPLIER:
      newState.multiplier = action.multiplier
      return newState
    default:
      return oldState
  }
}