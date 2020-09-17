import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import BasicRouting from './Pages/RouterDemo/BasicRouting'
import NestedRouting from './Pages/NestedRouting'
import URLParams from './Pages/URLParams'
import './App.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import store from './store'

function App() {
  return (
    <div className="App">
      <ul className="sider">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/basic-routing'>Basic Routing</Link></li>
        <li><Link to='/users'>Nested Routing</Link></li>
        <li><Link to='/redirect'>Redirect to Home</Link></li>
        <li><Link to='/getId'>Get ID Route</Link></li>
      </ul>
      <div className="content">
        <Switch>
          <Route path='/basic-routing'><BasicRouting></BasicRouting></Route>
          <Route path='/users'><NestedRouting></NestedRouting></Route>
          <Route path='/getId'><URLParams></URLParams></Route>
          <Route path='/redirect'><RedirectTo></RedirectTo></Route>
          <Route path='/'><Home></Home></Route>
        </Switch>
      </div>
    </div>
  );
}

function Home(){
  return <div>I am Home</div>
}

function RedirectTo(){
  return <Redirect to='/home'></Redirect>
}

export default App;
