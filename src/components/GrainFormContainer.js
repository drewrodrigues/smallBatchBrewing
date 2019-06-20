import { connect } from "react-redux"
import GrainForm from "./GrainForm"
import { addGrain } from "../actions/grainActions"

const mapDispatchToProps = dispatch => ({
  addGrain: grain => dispatch(addGrain(grain))
})

export default connect(
  null,
  mapDispatchToProps
)(GrainForm)