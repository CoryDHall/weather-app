export const Units = {
  long: unit => unit === 'imperial' ? 'Fahrenheit' : unit === 'metric' ? 'Celsius' : 'Kelvin',
  short: unit => unit === 'imperial' ? 'F' : unit === 'metric' ? 'C' : 'K',
  shortWithDegree: unit => `°${Units.short(unit)}`
};
