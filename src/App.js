import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./screens/main";
import CodingLanguages from "./screens/CodingLanguages";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="CodingLanguages" element={<CodingLanguages />} />
      </Routes>
    </div>
  );
}
