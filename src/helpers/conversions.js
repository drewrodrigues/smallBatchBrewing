export const oneGallonMultiplier = (units, amount) => {
  if (units === "gallons") {
    return 1 / amount
  } else if (units === "liters") {
    return 1 / litersToGallons(amount)
  }
}

export const litersToGallons = liters => {
  return liters / 3.785
}