import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from 'libs/store';
import {BrowserRouter as Router} from 'react-router-dom';
import App from 'components/app/app';

if (MOCK) {
    require('mock/mock');
}

renderWithHotReload(App);

if (module.hot) {
    module.hot.accept('./router/router', () => {
        const NextApp = require('./router/router').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <RootElement/>
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}