import React, { useState } from "react";

import { units, convertUnitToCorolla } from "../utils";

export default function Convertor({ category }) {
  const [unit, setUnit] = useState(
    units.find(({ name }) => name === category).sourceUnits[0].name
  );

  const [corollas, setCorollas] = useState(0);

  const getCorollas = value => {
    setCorollas(convertUnitToCorolla(category, unit, value));
  };

  return (
    <div>
      <h2>{category}</h2>
      <span>
        <input
          type="number"
          className="source"
          onChange={e => getCorollas(e.target.value)}
        />
        <select onChange={e => setUnit(e.target.value)}>
          {units
            .find(({ name }) => name === category)
            .sourceUnits.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
        </select>
      </span>
      <span> = </span>
      <input type="text" className="result" value={corollas} readOnly />
      <span>Corollas</span>
    </div>
  );
}
