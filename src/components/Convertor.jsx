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
      {selectedCategory && selectedCategory.label && (
        <h3 className="subtitle is-5 has-text-centered">
          {selectedCategory.label}
        </h3>
      )}
      <div className="columns is-mobile">
        <div className="column">
          <div className="columns is-gapless">
            <div className="column">
              <div class="field is-horizontal">
                <div class="control">
                  <input
                    type="number"
                    className="input"
                    onChange={e => onChangeValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div class="field is-horizontal">
                <div class="control">
                  <div className="select">
                    <select
                      onChange={e => onSelectUnit(e.target.value)}
                      className="is-capitalized"
                    >
                      {selectedCategory &&
                        selectedCategory.units.map(({ name }) => (
                          <option key={name} value={name}>
                            {name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-1">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label has-text-centered">=</label>
            </div>
          </div>
        </div>
        <div className="column">
          <div class="field is-horizontal">
            <div class="control">
              <input
                type="text"
                className="input"
                value={parseFloat(corollas).toFixed(2)}
                readOnly
              />
            </div>
            <div class="field-label is-normal">
              <label class="label has-text-left" style={{ marginLeft: 20 }}>
                2018 Toyota Corollas
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
