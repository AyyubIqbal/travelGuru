import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddNewService from "./Pages/AddNewService/AddNewService";
import Footer from "./Pages/Home/Footer/Footer";
import Header from "./Pages/Home/Header/Header";
import Home from "./Pages/Home/Home/Home";
import PlaceOrder from "./Pages/Home/PlaceOrder/PlaceOrder";
import Services from "./Pages/Home/Services/Services";
import Login from "./Pages/Login/Login/Login";
import ManageOrder from "./Pages/ManageOrder/ManageOrder";
import MyOrder from "./Pages/MyOrder/MyOrder";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";

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
          <PrivateRoute path='/myorder'>
            <MyOrder />
          </PrivateRoute>
          <PrivateRoute path='/manageorder'>
            <ManageOrder />
          </PrivateRoute>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
