import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ApartmentsPage from "./pages/ApartmentsPage";
import AddApartmentPage from "./pages/AddApartmentPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<ApartmentsPage />} />
      </Routes>
    </div>
  );
}

export default App;
