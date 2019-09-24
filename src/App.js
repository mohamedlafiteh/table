import React from "react";
import DataTable from "./DataTable";
function App() {
  return (
    <div className="App">
      <h1
        style={{ textAlign: "center", backgoundColor: "green", color: "black" }}
      >
        Edit Table
      </h1>
      <DataTable />
    </div>
  );
}

export default App;
