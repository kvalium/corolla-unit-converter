import React, { useState } from "react";

import { categories } from "../utils";

import CategorySelector from "./CategorySelector";
import ConvertorContainer from "./ConvertorContainer";

/**
 * Homepage.
 */
export default function App() {
  const [category, setCategory] = useState(categories[0].name);

  return (
    <>
      <h1 className="title has-text-centered">
        Toyota Corolla unit converter!
      </h1>
      <CategorySelector onChange={setCategory} />
      <ConvertorContainer category={category} />
    </>
  );
}
