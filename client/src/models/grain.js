import { isNumber, isUnit, ValidationError } from "../helpers/validations"

export default class Grain {
  constructor(type, amount, unit) {
    this.validationErrors = []
    this.type(type)
    this.amount(amount)
    this.unit(unit)
  }

  type(type) {
    if (type.length > 0) {
      this.type = type
    } else {
      this.validationErrors.push({
        attribute: "type",
        message: "Type is required"
      })
    }
  }

  amount(amount) {
    const parsedAmount = parseFloat(amount)
    if (isNumber(parsedAmount)) {
      this.amount = parsedAmount
    } else {
      this.validationErrors.push({
        attribute: "amount",
        message: "Amount isn't a number"
      })
    }
  }

  unit(unit) {
    if (isUnit(unit)) {
      this.unit = unit
    } else {
      this.validationErrors.push({
        attribute: "unit",
        message: "Unit isn't valid"
      })
    }
  }
}