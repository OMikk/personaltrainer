import React from 'react';
import Customerlist from './Customerlist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Traininglist from './Traininglist';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

export default function SimpleMenu() {
 
  return (
    <div >
    <AppBar>
      <Router>
        <div>
          <Link  style={{padding:10, fontSize: 20}} to="/customers">Customers</Link>{''}
          <Link style={{padding:10, fontSize: 20}} to="/trainings">Trainings</Link>{''}
          <Switch>
            <Route exact path="/customers" component={Customerlist}/>
            <Route exact path="/trainings" component={Traininglist}/>
            
          </Switch>
        </div>
      </Router>
      </AppBar>
    
  </div>
  );
}