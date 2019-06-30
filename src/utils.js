// specs taken from https://www.thecarconnection.com/specifications/toyota_corolla_2018_l-cvt-gs

export const corolla = {
  sellPace: 32, // TC sell pace is avg 27 to 37 seconds.
  passengers: 5,
  mass: 1288, // kilograms
  height: 145.5, // centimeters
  length: 465, // centimeters
  hp: 132, // horsepower
  volume: 369 // trunk volume (liters)
};

const lengthsourceUnits = [
  { name: "meters", ratio: 0.01 },
  { name: "centimeters", ratio: 1 },
  { name: "milimeters", ratio: 10 },
  { name: "kilometers", ratio: 0.00001 }
];

export const units = [
  {
    name: "length",
    sourceUnits: lengthsourceUnits
  },
  {
    name: "height",
    sourceUnits: lengthsourceUnits
  },
  {
    name: "mass",
    sourceUnits: [
      { name: "kilograms", ratio: 1 },
      { name: "tons", ratio: 0.001 }
    ]
  }
];

export const convertUnitToCorolla = (category, unit, value) => {
  const ratio = units
    .find(({ name }) => name === category)
    .sourceUnits.find(({ name }) => name === unit).ratio;
  console.log(category, unit, value, ratio);
  return value / ratio / corolla[category];
};
