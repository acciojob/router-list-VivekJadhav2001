
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";
const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Router>
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route path="/items/:id" component={ItemDetails} />
        </Switch>
      </Router>

    </div>
  )
}

export default App
