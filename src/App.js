import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter  , Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
};

export default App;
