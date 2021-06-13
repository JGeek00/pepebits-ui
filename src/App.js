import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
    return (
        <Switch>
            <Route path="/login"  render={
                props => <Login {...props} />
            }/>
            <Route path="/" exact render={
                props => <Home {...props} />
            }/>
        </Switch>
    );
}

export default App;
