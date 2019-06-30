import React from "react";

import { categories } from "../utils";

/**
 * Category selector.
 *
 * @param {Function} onChange on selecting a new category
 */
export default function CategorySelector({ onChange }) {
  return (
    <div>
      <select onChange={e => onChange(e.target.value)}>
        {categories &&
          categories.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
      </select>
    </div>
  );
}
