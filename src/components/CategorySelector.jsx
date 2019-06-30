import React from "react";

import { categories } from "../utils";

/**
 * Category selector.
 *
 * @param {Function} onChange on selecting a new category
 */
export default function CategorySelector({ onChange }) {
  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <div class="field">
          <div class="control">
            <div className="select is-large category-selector is-block">
              <select
                onChange={e => onChange(e.target.value)}
                style={{ display: "block", width: "100%" }}
                className="is-capitalized"
              >
                {categories &&
                  categories.map(({ name }) => (
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
  );
}
