import Heading from "./Components/Heading/Heding";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import React, { useState, useEffect } from "react";
import Homepage from "./pages/Homepage/Homepage";
import Detailpage from "./pages/Detailpage/Detailpage";
import { RingLoader, CirleLoader, PacmanLoader } from "react-spinners";
const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="mainWrapper">
      {loading ? (
        <div className="loader">
          <PacmanLoader
            className="loader"
            size={40}
            color={"#5FC8D8"}
            loading={loading}
          />
        </div>
      ) : (
        <>
          <Heading>Food Find with us</Heading>
          <Router>
            <Switch>
              <Route path="/" exact component={Homepage}></Route>
              <Route
                path="/foodDetails/:id"
                exact
                component={Detailpage}
              ></Route>
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
};

export default App;
