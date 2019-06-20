import React, { Component } from "react"
import Grain from "../models/grain"

export default class GrainForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      grainAmount: 0,
      grainType: "",
      grainUnit: "oz"
    }
    this.addGrain = this.addGrain.bind(this)
  }

  addGrain(e) {
    e.preventDefault()
    const { grainType, grainAmount, grainUnit } = this.state
    const grainToAdd = new Grain(grainType, grainAmount, grainUnit)
    if (grainToAdd.validationErrors.length === 0) {
      this.props.addGrain(grainToAdd)
      this.setState({
        errors: [],
        grainAmount: 0,
        grainType: "",
        grainUnit: "oz"
      })
    } else {
      this.setState({
        errors: grainToAdd.validationErrors
      })
    }
  }

  // TODO: pull out into module
  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  render() {
    return (
      <form onSubmit={ this.addGrain } style={ formStyle }>
        <h1 style={ sectionHeader }>Grains</h1>

        <div style={ errorsStyle }>
          { this.state.errors.map((error, index) => (
            <p key={ index } style={ errorStyle }>{ error.message }</p>
          ))}
        </div>

        <label htmlFor="grains">Add Type</label>
        <input type="text"
          id="grains"
          onChange={ this.update("grainType") }
          placeholder="Type"
          style={ inputStyle }
          value={ this.state.grainType }
        />

        {/* Grain Amount */}
        <label htmlFor="amount">Grain Amount</label>
        <input type="text"
          id="amount"
          onChange={ this.update("grainAmount") }
          placeholder="Amount"
          style={ inputStyle }
          value={ this.state.grainAmount }
        />

        {/* Grain Unit */}
        <label htmlFor="grainUnit">Grain Unit</label>
        <select
          id="units"
          onChange={ this.update("grainUnit") }
          style={ inputStyle }
          value={ this.state.grainUnit }
        >
          <option value="g">g</option>
          <option value="lb">lb</option>
          <option value="oz">oz</option>
        </select>

        <button>Add</button>
      </form>
    )
  }
}

// TODO: come up with better solution for css

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

const errorStyle = {
  background: "pink",
  borderLeft: "3px solid red",
  fontSize: "12px",
  marginBottom: "5px",
  padding: "10px"
}

const errorsStyle = {
  marginBottom: "10px"
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