import { combineReducers } from "redux"
import grainsReducer from "./entities/grainsReducer"

export default combineReducers({
  grains: grainsReducer
})