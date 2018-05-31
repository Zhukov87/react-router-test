import React from 'react';
import { Route, Switch } from "react-router-dom";
import FirstCounter from './FirstCounter';
import SecondCounter from './SecondCounter';
import Home from './Home';
import createHistory from "history/createBrowserHistory";

const history = createHistory();

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/firstCounter' component={FirstCounter}/>
                <Route path='/secondCounter' component={SecondCounter}/>
            </Switch>
        </main>
    );
}

export default Main;