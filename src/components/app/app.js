import React, {Component} from 'react';
import Nav from 'components/nav/nav';
import MainRouter from 'router/router';

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <MainRouter />
            </div>
        )
    }
}