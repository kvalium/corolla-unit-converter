import React from "react";

import { units } from "../utils";

export default function Convertor({
  category,
  onSelectUnit,
  onChangeValue,
  corollas
}) {
  return (
    <div>
      <h2>{category}</h2>
      <span>
        <input
          type="number"
          className="source"
          onChange={e => onChangeValue(e.target.value)}
        />
        <select onChange={e => onSelectUnit(e.target.value)}>
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
