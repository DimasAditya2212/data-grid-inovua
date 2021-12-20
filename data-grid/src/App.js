import "@inovua/reactdatagrid-enterprise/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TablePage from "./pages/TablePage";
import AddWorker from "./pages/AddWorker";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TablePage />} />
          <Route path="/add-worker" element={<AddWorker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
