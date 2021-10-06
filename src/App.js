import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((item, index) => {
            return (
              <Route
                path={item.path}
                exact={item.exact}
                component={item.component}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
