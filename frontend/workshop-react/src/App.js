import logo from "./logo.svg";
import { Switch, Route, Link } from "react-router-dom";
import Livraison from "./views/livraison";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/livraisons" className="navbar-brand">
          Lablebi
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/livraisons"} className="nav-link">
              Livraisons
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path="/livraisons" component={Livraison} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
