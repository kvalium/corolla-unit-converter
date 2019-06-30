import React from "react";

import { categories } from "../utils";

/**
 * Convertor allows to select a unit, enter a value then displays the
 * corresponding number of Toyota Corollas.
 *
 * @param {String} category units category.
 * @param {Function} onSelectUnit on select a unit callback.
 * @param {Function} onChangeValue on entering a new value callback.
 * @param {Number} corollas corresponding to the value.
 */
export default function Convertor({
  category,
  onSelectUnit,
  onChangeValue,
  corollas
}) {
  const selectedCategory = categories.find(({ name }) => name === category);
  return (
    <div>
      <h2>{category}</h2>
      {selectedCategory && selectedCategory.label && (
        <h3>{selectedCategory.label}</h3>
      )}
      <span>
        <input
          type="number"
          className="source"
          onChange={e => onChangeValue(e.target.value)}
        />
        <select onChange={e => onSelectUnit(e.target.value)}>
          {selectedCategory &&
            selectedCategory.units.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
        </select>
      </span>
      <span> = </span>
      <input
        type="text"
        className="result"
        value={parseFloat(corollas).toFixed(2)}
        readOnly
      />
      <span>Corollas</span>
    </div>
  );
}
