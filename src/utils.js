// 2018 Toyota Corolla facts.
const corolla = {
  sellPace: 32, // TC sell pace is avg 27 to 37 seconds.
  passengers: 5,
  mass: 1288, // kilograms
  height: 145.5, // centimeters
  length: 465, // centimeters
  hp: 132, // horsepower
  volume: 369 // trunk volume (liters)
};

/**
 * Length units and their centimer divide ratio.
 */
const lengthsourceUnits = [
  { name: "meters", ratio: 100 },
  { name: "centimeters", ratio: 1 },
  { name: "milimeters", ratio: 0.1 },
  { name: "kilometers", ratio: 100000 },
  { name: "yards", ratio: 91.44 },
  { name: "foots", ratio: 30.48 },
  { name: "inches", ratio: 2.54 },
  { name: "nautical miles", ratio: 185200 }
];

// Unit categories, label and available units.
export const categories = [
  {
    name: "length",
    label: "a 2018 Toyota Corollas length is 465 centimeters.",
    units: lengthsourceUnits
  },
  {
    name: "height",
    label: "a 2018 Toyota Corollas height is 145.5 centimeters.",
    units: lengthsourceUnits
  },
  {
    name: "mass",
    label: "a 2018 Toyota Corollas weights 1,288 kilograms.",
    units: [
      { name: "kilograms", ratio: 1 },
      { name: "tonnes", ratio: 1000 },
      { name: "onces", ratio: 35.274 }
    ]
  },
  {
    name: "volume",
    label: "Trunk volume of a 2019 Toyota Corolla is roughtly 369 liters",
    units: [{ name: "litres", ratio: 1 }, { name: "gallons", ratio: 3.785 }]
  }
];

/**
 * For a given category and unit, returns the Corolla number for the corresponding
 * given value.
 *
 * @param {String} category the unit category (length, mass, volume, etc.)
 * @param {String} unit the selected unit for the corresponding category.
 * @param {Number} value the value to convert.
 */
export const convertUnitToCorolla = (category, unit, value) => {
  const ratio = categories
    .find(({ name }) => name === category)
    .units.find(({ name }) => name === unit).ratio;
  const corollas = (value * ratio) / corolla[category];
  return corollas;
};
