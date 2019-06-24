import { connect } from "react-redux"
import Form from "./Form"
import { updateMultiplier } from "../actions/recipeActions"

const mapStateToProps = state => ({
  multiplier: state.entities.recipe.multiplier
})

const mapDispatchToProps = dispatch => ({
  updateMultiplier: multiplier => dispatch(updateMultiplier(multiplier))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)