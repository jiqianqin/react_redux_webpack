import React from 'react';
import Bundle from 'libs/bundle';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from 'bundle-loader?lazy&name=home!modules/home/home';
import Page1 from 'bundle-loader?lazy&name=page1!modules/page1/page';
import Counter from 'bundle-loader?lazy&name=counter!modules/couter/component/couter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!modules/userInfo/component/userInfo';
import NotFound from 'bundle-loader?lazy&name=notFound!modules/notfound/notfound';
import Loading from 'components/loading/loading';

const createComponent = (component) => () => (
    <Bundle load={component}>
        {(Component) => Component ? <Component/> : <Loading/>
}
    </Bundle>
);

const getRouter = () => (
    <Switch>
        <Route exact path="/" component={createComponent(Home)}/>
        <Route path="/page1" component={createComponent(Page1)}/>
        <Route path="/counter" component={createComponent(Counter)}/>
        <Route path="/userinfo" component={createComponent(UserInfo)}/>
        <Route component={createComponent(NotFound)}/>
    </Switch>
);

export default getRouter;