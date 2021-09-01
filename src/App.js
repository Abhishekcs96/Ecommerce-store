import "./App.css";
import Header from "./containers/Header";
import Productlisting from "./containers/Productlisting";
import Productdetails from "./containers/Productdetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Productlisting} />
          <Route path="/product/:productId" exact component={Productdetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
