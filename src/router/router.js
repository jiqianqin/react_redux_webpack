import React from 'react';
import Bundle from 'router/bundle';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from 'bundle-loader?lazy&name=home!pages/home/home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/page1/page';
import Counter from 'bundle-loader?lazy&name=counter!pages/couter/component/couter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/userInfo/component/userInfo';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/notfound/notfound';
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