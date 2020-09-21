import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import BasicRouting from './Pages/RouterDemo/BasicRouting'
import NestedRouting from './Pages/NestedRouting'
import URLParams from './Pages/URLParams'
import TodoList from './Pages/TodoList'
import './App.scss'

function App() {
  return (
    <div className="App">
      <ul className="sider">
        <li className=''><Link to='/'>Home</Link></li>
        <li className='router'><Link to='/basic-routing'>Router - Basic Routing</Link></li>
        <li className='router'><Link to='/users'>Router - Nested Routing</Link></li>
        <li className='router'><Link to='/redirect'>Router - Redirect to Home</Link></li>
        <li className='router'><Link to='/getId'>Router - Get ID Route</Link></li>
        <li className='redux'><Link to='/todo-list-demo'>Redux - TodoList Demo</Link></li>
      </ul>
      <div className="content">
        <Switch>
          <Route path='/basic-routing'><BasicRouting></BasicRouting></Route>
          <Route path='/users'><NestedRouting></NestedRouting></Route>
          <Route path='/getId'><URLParams></URLParams></Route>
          <Route path='/redirect'><RedirectTo></RedirectTo></Route>
          <Route path='/todo-list-demo'><TodoList></TodoList></Route>
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
