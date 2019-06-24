export const ADD_GRAIN = "ADD_GRAIN"

export const addGrain = grain => {
  return {
    type: "ADD_GRAIN",
    grain
  }
}