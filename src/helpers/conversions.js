export const oneGallonMultiplier = (units, amount) => {
  if (amount === "") return 0
  const parsedAmount = parseFloat(amount)
  const convertedAmount = (units === "gallons" ? parsedAmount : litersToGallons(parsedAmount))
  return (1 / convertedAmount).toFixed(2)
}

export const litersToGallons = liters => {
  return liters / 3.785
}