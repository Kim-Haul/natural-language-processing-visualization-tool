import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./shared/GlobalStyles";

// 페이지 import
import Layout from "./component/common/Layout";
import Login from "./page/Login";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
