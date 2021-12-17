import { Routes, Route } from "react-router-dom";

import "@inovua/reactdatagrid-enterprise/index.css";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <div className="App">
      <h1>Table</h1>
      <TablePage />
    </div>
  );
}

export default App;
