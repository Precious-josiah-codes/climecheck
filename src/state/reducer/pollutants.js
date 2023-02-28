export const pollutantData = [
  { PM1: 0.23, PM25: 930, PM10: 90, CO: 32, CO2: 30.3, TVOC: 21, FLAME: 23.3 },
];

export const pollutantsReducer = (state = pollutantData, action) => {
  switch (action.type) {
    case "HAND":
      return "this is my name";

    default:
      return state;
  }
};
