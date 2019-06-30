import React, { useState } from "react";

import { units } from "../utils";

import UnitSelector from "./UnitSelector";
import Convertor from "./Convertor";

export default function App() {
  const [category, setCategory] = useState(units[0].name);

  return (
    <div className="App">
      <h1>Toyota Corolla unit converter!</h1>
      <UnitSelector onChange={setCategory} />
      <Convertor category={category} />
    </div>
  );
}
