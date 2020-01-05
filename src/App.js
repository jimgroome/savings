import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/page1" component={Page1} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
