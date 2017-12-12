import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import { bundle } from '../libs/bundle';

const Home = require("bundle-loader?lazy&name=home!../modules/home/home");
const Page1 = require("bundle-loader?lazy&name=page1!../modules/page1/page");
const Counter = require("bundle-loader?lazy&name=counter!../modules/couter/component/couter");
const UserInfo = require("bundle-loader?lazy&name=userInfo!../modules/userInfo/component/userInfo");
const NotFound = require("bundle-loader?lazy&name=notFound!../modules/notfound/notfound");

// const createComponent = (component?:any) => () => (
//     <Bundle load={component}>
//         {(Component) => Component ? <Component/> : <Loading/>
// }
//     </Bundle>
// );

const getRouter = () => (
    <Switch>
        <Route exact path="/" component={bundle(Home)}/>
        <Route path="/page1" component={bundle(Page1)}/>
        <Route path="/counter" component={bundle(Counter)}/>
        <Route path="/userinfo" component={bundle(UserInfo)}/>
        <Route component={bundle(NotFound)}/>
    </Switch>
);

export default getRouter;