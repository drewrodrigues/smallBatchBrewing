import React from "react"

export default class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      abv: 0,
      grainAmount: 0,
      grainType: "",
      grainUnit: "oz",
      grains: [],
      hops: [],
      unitAmount: 0,
      recipeUnits: "gallons"
    }

    this.addGrain = this.addGrain.bind(this)
  }

  addGrain(e) {
    e.preventDefault()
    const grainToAdd = {
      amount: this.state.grainAmount,
      type: this.state.grainType,
      unit: this.state.grainUnit
    }
    const updatedGrains = this.state.grains
    updatedGrains.push(grainToAdd)
    this.props.addGrain(grainToAdd)
    this.setState({
      grainAmount: 0,
      grainType: "",
      grainUnit: "oz",
      grains: updatedGrains
    })
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  render() {
    return (
      <div style={ formStyle }>
        <h1 style={ sectionHeader }>Recipe Details</h1>

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

        <h1 style={ sectionHeader }>Grains</h1>

        {/* Add Grains */}
        <form onSubmit={ this.addGrain }>
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

        {/* Added Grains */}
        <h2 style={ addedGrainsHeaderStyle }>Added Grains</h2>
        { this.state.grains.map(grain => (
          <p key={ grain } style={ grainStyle }>
            { grain.type }
            <span style={ grainDetailStyle }>{ grain.amount } { grain.unit }</span>
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