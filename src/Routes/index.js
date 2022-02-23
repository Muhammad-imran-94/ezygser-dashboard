import Login from '../pages/login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import ForgetPassword from '../pages/ForgetPassword'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const Index = () => {
  return (
    <>
        <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/sign-up" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/forget-password" component={ForgetPassword} />
        </Switch>
      </Router></>
  )
}

export default Index;
