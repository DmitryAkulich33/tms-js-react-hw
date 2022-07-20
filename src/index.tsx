import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "jquery";
import "bootstrap/dist/js/bootstrap";
import "./assets/css/mediumish.css";
import "./assets/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
