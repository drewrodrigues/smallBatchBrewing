import { connect } from "react-redux"
import GrainIndex from "./GrainIndex"

const mapStateToProps = state => ({
    grains: state.entities.grains
})

export default connect(
    mapStateToProps,
    null
)(GrainIndex)