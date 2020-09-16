import React from 'react'
import {
    BrowserRouter as Router ,
    Link,
    Switch,
    Route
} from 'react-router-dom'

export default function BasicRouting(){
    return (
        <Router>
            <ul>
                <li><Link to='/basic-routing/home'>Home</Link></li>
                <li><Link to='/basic-routing/about'>About</Link></li>
                <li><Link to='/basic-routing/users'>Users</Link></li>
            </ul>
            <Switch>
                <Route path='/basic-routing/about'><About></About></Route>
                <Route path='/basic-routing/users'><Users></Users></Route>
                <Route path='/basic-routing/home'><Home></Home></Route>
            </Switch>
        </Router>
    )
}

function Home(){
    return <div>I am Basic Routing Home</div>
}

function About(){
    return <div>I am Basic Routing About</div>
}

function Users(){
    return <div>I am Basic Routing Users</div>
}