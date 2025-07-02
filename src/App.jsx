import { Routes, Route } from "react-router-dom";
import App2 from "./App2";
import React from 'react'
import AppMemo from "./assets/AppMemo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<App2 />} />
      <Route path="/usememo" element={<AppMemo />} />
    </Routes>
  )
}

export default App