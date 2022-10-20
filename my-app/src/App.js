import React from "react";

import { Route, Switch } from "react-router-dom";

import About from "./components/reactRouter/About";
import Contact from "./components/reactRouter/Contact";
import Error from "./components/reactRouter/Error";

const App = () => {
  const Name = () => {
    return <h2>My name is Al Noman</h2>;
  };
  return (
    <>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/Name" component={Name} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
