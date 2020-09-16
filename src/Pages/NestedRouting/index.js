import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    useParams,
    useRouteMatch
} from 'react-router-dom'

export default function NestedRouting(){
    const match = useRouteMatch()
    return (
        <div>
            <h3>Nested Routing</h3>
            <ul>
               <li><Link to={`${match.url}/components`}>components</Link></li> 
               <li><Link to={`${match.url}/props-v-state`}>props vs. state</Link></li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:topicId`}><Topic></Topic></Route>
                <Route path={`${match.path}`}>
                    <h3>Please select a topic</h3>
                </Route>
            </Switch>
        </div>
    )
}

function Topic(){
    const param = useParams
    return (
        <div>
            <h3>Requested top ID: {param.topicId}</h3>
        </div>
    )
}