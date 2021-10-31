import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddNewService from "./Pages/AddNewService/AddNewService";
import Header from "./Pages/Home/Header/Header";
import Home from "./Pages/Home/Home/Home";
import PlaceOrder from "./Pages/Home/PlaceOrder/PlaceOrder";
import Services from "./Pages/Home/Services/Services";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/services'>
            <Services />
          </Route>
          <PrivateRoute path='/placeorder/:serviceId'>
            <PlaceOrder />
          </PrivateRoute>
          <PrivateRoute path='/addservice'>
            <AddNewService />
          </PrivateRoute>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
