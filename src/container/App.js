import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import IssueTracker from '../components/issueTrackerPage';
import ZipcodeDetails from '../components/zipcodeDetailsPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact={true} component={IssueTracker} />
            <Route path='/issue-tracker' component={IssueTracker} />
             <Route path='/zipcode-details' component={ZipcodeDetails} /> 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;