import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./modules/Login";

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
