import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter as Router} from 'react-router-dom'; 

import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import App2 from './App2';

ReactDOM.render((
    <Provider store={configureStore()}>
        <Router basename={process.env.PUBLIC_URL}>
            {/* <App /> */}
            <App2 />
        </Router>
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
