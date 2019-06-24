import { connect } from "react-redux"
import GrainIndex from "./GrainIndex"

const mapStateToProps = state => ({
    grains: state.entities.grains,
    multiplier: state.entities.recipe.multiplier
})

export default connect(
    mapStateToProps,
    null
)(GrainIndex)