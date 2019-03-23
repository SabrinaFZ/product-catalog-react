import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PhoneListCatalogContainer from "../containers/PhoneListCatalogContainer";
import PhoneDetailContainer from './../containers/PhoneDetailContainer';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={PhoneListCatalogContainer} />
            <Route path="/phone/:id" component={PhoneDetailContainer}/>
            <Route component={() => <p>Error!</p>} />
        </Switch>
    )
}

export default Routes;