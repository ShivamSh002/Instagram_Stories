import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import Stories from "./Component/Stories";

const App = () => {
  return (
    <div>
      <p className="head">Instagram</p>
      <Stories />
    </div>
  );
};

export default App;
