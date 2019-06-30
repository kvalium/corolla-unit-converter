import React from "react";

import { units } from "../utils";

export default function UnitSelector({ onChange }) {
  return (
    <div>
      <select onChange={e => onChange(e.target.value)}>
        {units &&
          units.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        {/* <option value="Area">Area</option>
        <option value="Frequency">Frequency</option>
        <option value="length">Length</option>
        <option value="mass">Mass</option>
        <option value="Plane Angle">Plane Angle</option>
        <option value="Pressure">Pressure</option>
        <option value="speed">Speed</option>
        <option value="Temperature">Temperature</option>
        <option value="time">Time</option>
        <option value="volume">Volume</option>
        <option value="energy">Energy</option> */}
      </select>
    </div>
  );
}
