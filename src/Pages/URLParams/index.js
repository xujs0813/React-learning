import React from 'react'
import {
    Link,
    Route,
    Switch,
    useRouteMatch,
    useParams
} from 'react-router-dom'


export default function URLParams(){
    const {path} = useRouteMatch()
    return (
        <div>
            <ul>
                <li><Link to={`${path}/java`}>JAVA</Link></li>
                <li><Link to={`${path}/javascript`}>javascript</Link></li>
                <li><Link to={`${path}/python`}>python</Link></li>
            </ul>
            <Switch>
                <Route path={`${path}/:id`}><GetId></GetId></Route>
            </Switch>
        </div>
    )
}

function GetId(){
    const params = useParams()
    return (
        <div>this ID is : {params.id}</div>
    )
}