import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PhoneListContainer from './../components/PhoneListContainer';
import PhoneDetailComponent from './../components/PhoneDetailComponent';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={PhoneListContainer} />
            <Route path="/phone/:id" component={PhoneDetailComponent}/>
            <Route component={() => <p>Error!</p>} />
        </Switch>
    )
}

export default Routes;