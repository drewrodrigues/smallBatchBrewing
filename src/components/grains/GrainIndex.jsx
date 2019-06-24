import React, { Component } from "react"
import { oneGallonMultiplier } from "../../helpers/conversions"

export default class GrainIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      multiplier: 1
    }
  }

  render() {
    const { grains } = this.props
    
    return (
      <div>
        <h2 style={ addedGrainsHeaderStyle }>Added Grains</h2>
        { grains.map((grain, index) => (
          <p key={ index } style={ grainStyle }>
            { grain.type }
            <span style={ grainDetailStyle }>
              { grain.amount.toFixed(2) } { grain.unit }
              --> { (grain.amount * this.state.multiplier).toFixed(2) } { grain.unit }
            </span>
          </p>
        ))}
      </div>
    )
  }
}

const addedGrainsHeaderStyle = {
  color: "#ccc",
  fontWeight: "700",
  marginBottom: "10px",
  marginTop: "25px"
}

const grainDetailStyle = {
  float: "right"
}

const grainStyle = {
  background: "#f9c633",
  borderRadius: "5px",
  marginBottom: "5px",
  padding: "10px"
}