import React from 'react';
import './App.css';
import{BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import AgencyList from './components/lists/agencyList';
import UserList from './components/lists/userList';
import PhoneList from './components/lists/phoneList';
import TaggedPhoneList from './components/lists/phoneTaggedList';
import CreateUser from './components/create/createUser';

import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="ui container fluid">
        <div className="ui fixed menu">
          <Link to="/" className="item" style={{'width':'244px'}}>LI System</Link>
        </div>
        <div className="ui grid">
          <div className="three wide column">
            <div className="ui vertical fixed labeled icon menu" style={{'height':'600px', 'marginTop':'40px','width':'245px'}}>
              <Link to='/agency/list' className="item">
                <i className="building icon"></i>
                Agency
              </Link>
              <Link to='/user/list' className="item">
                <i className="users icon"></i>
                User Profiles
              </Link>
              <Link to='/phone/list' className="item">
                <i className="list icon"></i>
                Phone Numbers List
              </Link>
              <Link to='/tagged_phone/list' className="item">
                <i className="phone icon"></i>
                Tagged Phone Number List
              </Link>
            </div>
          </div>
          <div className="thirteen wide column containerCollumn">
            <Switch>
              <Route path="/agency/list" component={AgencyList} />
              <Route path="/user/list" component={UserList} />
              <Route path="/phone/list" component={PhoneList} />
              <Route path="/tagged_phone/list" component={TaggedPhoneList} />
              <Route path="/user/create" component={CreateUser} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
