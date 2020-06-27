import React from "react";
import {Route, Switch, BrowserRouter } from "react-router-dom";

import pages from './pages'

class App extends React.Component {
  render() {
    console.log(Object.entries(pages))
    return (
      <BrowserRouter>
        <Switch>
          {Object.entries(pages).map(([routeName, routeObj]) => (
            <Route
            key={routeName}
            exact
            path={routeObj.path}
            component={routeObj.component}
            />
            ))}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;