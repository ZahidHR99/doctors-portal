import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Appointment from './pages/Appointment/Appointment';
import Modals from './pages/Modals/Modals';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import AuthProvider from './contexts/Authprovider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

function App(){
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/home">
                <Home/>
              </Route>  
              <PrivateRoute path="/appointment">
                <Appointment/>
              </PrivateRoute>
              <Route path="/login">
                <Login/>
              </Route> 
              <Route path="/register">
                <Registration/>
              </Route> 
              <Route path="/modal">
                <Modals></Modals>
              </Route> 
              <PrivateRoute path="/dashboard">
                <Dashboard/>
              </PrivateRoute>
            </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
