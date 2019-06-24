import React from "react"
import Grain from "../models/grain"
import { oneGallonMultiplier } from "../helpers/conversions"

export default class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      abv: 0,
      errors: [],
      unitAmount: 1,
      recipeUnits: "gallons"
    }
  }

  componentDidMount() {
    this.props.updateMultiplier(
      oneGallonMultiplier(this.state.recipeUnits, this.state.unitAmount)
    )
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value,
      }, () => {
        this.props.updateMultiplier(
          oneGallonMultiplier(this.state.recipeUnits, this.state.unitAmount)
        )
      })
    }
  }

  render() {
    return (
      <div>
        <h1 style={ sectionHeader }>Recipe Details</h1>
        <h2>Multiplier: { this.props.multiplier }</h2>

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
      </div>
    )
  }
}

const formStyle = {
  background: "white",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.25)",
  margin: "25px auto 0",
  padding: "25px",
  width: "350px"
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