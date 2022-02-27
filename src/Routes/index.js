import Login from '../pages/login'
import Register from '../pages/Register'
import ForgetPassword from '../pages/ForgetPassword'
import NewDevice from '../pages/AddDevice'
import Devices from '../pages/Devices';
import AddUser from '../pages/AddUser'
import RunningDevices from '../pages/RunningDevices'
import ScheduleDevice from '../pages/ScheduleDevices'



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
          <Route path="/forget-password" component={ForgetPassword} />
          <Route exact path="/devices" component={Devices} />
          <Route exact path="/add-device" component={NewDevice} />
          <Route exact path="/add-user" component={AddUser} />
          <Route exact path="/running-devices" component={RunningDevices} />
          <Route exact path="/schedule-devices" component={ScheduleDevice} /> 
          

      
      <Route exact path="/dashboard/Ware-house" component={() => "Ware-house"} />
      
        </Switch>
      </Router></>
  )
}

export default Index;
