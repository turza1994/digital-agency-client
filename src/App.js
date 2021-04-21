import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardPage from "./components/DashboardPage/DashboardPage/DashboardPage";
import HomePage from "./components/HomePage/HomePage/HomePage";
import Login from "./components/LoginPage/Login";
import Navbar from "./components/Navbar/Navbar";
import Checkout from "./components/CheckoutPage/Checkout";
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  console.log(loggedInUser);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />
        <Switch>

          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <DashboardPage />
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
