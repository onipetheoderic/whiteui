import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";


export const Routing = (
  <Router>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/dashboard" component={DashboardPage} />
  </Router>
)