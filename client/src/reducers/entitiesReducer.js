import { combineReducers } from "redux"
import grainsReducer from "./entities/grainsReducer"
import recipeReducer from "./entities/recipeReducer"

export default combineReducers({
  grains: grainsReducer,
  recipe: recipeReducer
})