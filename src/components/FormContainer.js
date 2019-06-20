import { connect } from "react-redux"
import Form from "./Form"
import { addGrain } from "../actions/grainActions"

const mapStateToProps = state => ({
  grains: state.entities.grains
})

const mapDispatchToProps = dispatch => ({
  addGrain: grain => dispatch(addGrain(grain))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)