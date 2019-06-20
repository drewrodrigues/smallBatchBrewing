export const isNumber = input => {
  // input ensures not NaN
  return input && typeof(input) === "number"
}

export const isString = input => {
  return typeof(input) === "string"
}

export const isUnit = input => {
  const UNITS = ["g", "lb", "oz"]
  return UNITS.includes(input)
}