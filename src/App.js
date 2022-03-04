import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ApartmentsPage from "./pages/ApartmentsPage";
import AddApartmentPage from "./pages/AddApartmentPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={ApartmentsPage} />
        <Route exact path="/apartments/new" component={AddApartmentPage} />
      </Switch>
    </div>
  );
}

export default App;
