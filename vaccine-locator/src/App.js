import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import usercontext from './Context/user/usercontext';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // importing bootstrap 
import Home from './Pages/Home';
import Mapview from './Pages/Mapview';
import Aboutus from './Pages/Aboutus';


function App() {

  const context = useContext(usercontext)
  const { user, setuser } = context;

  return (
    <Fragment>
      <Router>
        <div>
          <Switch>
            {!user ?   // to show content as per login status
              (
                <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                </Switch>
              ) :
              (
                <>
                  <Route exact path="/" />
                  <Route path="/home" component={Home} />
                  <Route path="/map" component={Mapview} />
                  <Route path="/aboutus" component={Aboutus} />
                </>
              )}
          </Switch>

          {!user ?  //to redirect as per login status
            (<Redirect to="/login" />)
            :
            (<Redirect to="/home" />)
          }
        </div>

      </Router>
    </Fragment>
  );
}

export default App;


