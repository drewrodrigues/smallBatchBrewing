import React from "react"
import Grain from "../models/grain"
import { oneGallonMultiplier } from "../helpers/conversions"

export default class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      abv: 0,
      errors: [],
      hops: [],
      multiplier: 1,
      unitAmount: 1,
      recipeUnits: "gallons"
    }
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value,
      }, () => {
        this.setState({
          multiplier: oneGallonMultiplier(this.state.recipeUnits, this.state.unitAmount)
        })
      })
    }
  }

  render() {
    return (
      <div style={ formStyle }>
        <h1 style={ sectionHeader }>Recipe Details</h1>
        <h2>Multiplier: { this.state.multiplier }</h2>

        {/* Units */}
        <label htmlFor="units">Recipe Units</label>
        <select id="units"
          onChange={ this.update("recipeUnits") }
          style={ inputStyle }
          value={ this.state.recipeUnits }
        >
          <option value="gallons">Gallons</option>
          <option value="liters">Liters</option>
        </select>

        {/* Unit Amount */}
        <label htmlFor="amount">Unit Amount</label>
        <input type="text"
          onChange={ this.update("unitAmount") }
          style={ inputStyle }
          value={ this.state.unitAmount }
        />

        {/* Added Grains */}
        <h2 style={ addedGrainsHeaderStyle }>Added Grains</h2>
        { this.props.grains.map((grain, index) => (
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

const formStyle = {
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.25)",
  margin: "25px auto 0",
  padding: "25px",
  width: "350px"
}

const grainDetailStyle = {
  float: "right"
}

const grainStyle = {
  background: "#ccc",
  borderRadius: "5px",
  marginBottom: "5px",
  padding: "10px"
}

const inputStyle = {
  border: "1px solid #ccc",
  borderRadius: "3px",
  display: "block",
  marginBottom: "20px",
  padding: "5px",
  width: "100%"
}

const sectionHeader = {
  fontSize: "32px",
  fontWeight: "700",
  marginBottom: "10px"
}