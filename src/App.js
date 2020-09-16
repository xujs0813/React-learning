import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/users'>Users</Link></li>
        </ul>
      </div>
      <Switch>
        <Route path='/about'><About></About></Route>
        <Route path='/users'><Users></Users></Route>
        <Route path='/'><Home></Home></Route>
      </Switch>
    </Router>
  );
}

function Home(){
  return <div>I am Home</div>
}

function About(){
  return <div>I am About</div>
}


function Users(){
  return <div>I am Users</div>
}

export default App;
