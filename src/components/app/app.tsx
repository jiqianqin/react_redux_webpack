import * as React from 'react';
import Nav from '../nav/nav';
import MainRouter from '../../routers/router';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <MainRouter />
            </div>
        )
    }
}