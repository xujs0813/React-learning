import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import BasicRouting from './Pages/RouterDemo/BasicRouting'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="sider">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/basic-routing'>Basic Routing</Link></li>
          <li><Link to='/users'>Users</Link></li>
        </ul>
        <div className="content">
          <Switch>
            <Route path='/basic-routing'><BasicRouting></BasicRouting></Route>
            <Route path='/users'><Users></Users></Route>
            <Route path='/'><Home></Home></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home(){
  return <div>I am Home</div>
}

function Users(){
  return <div>I am Users</div>
}

export default App;
