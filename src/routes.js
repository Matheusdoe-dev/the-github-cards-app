import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Profiles from './pages/Profiles/index';
import Register from './pages/Register/index';

class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/profiles" component={Profiles} />
                    <Route path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;