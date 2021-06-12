import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
    return (
        <Switch>
            <Route to="/login">
                <Login />
            </Route>
            <Route to="/" exact>
                <Home />
            </Route>
        </Switch>
    );
}

export default App;
