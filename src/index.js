import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import './css/style.css';
import './css/components/toast.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);