import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';
import App from './containers/App';

import registerServiceWorker from './registerServiceWorker';


const app = document.getElementById('root');

const Menu = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(<Menu />, app);

registerServiceWorker();
