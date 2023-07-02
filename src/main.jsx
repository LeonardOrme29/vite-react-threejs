import React from 'react';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import {store} from './app/store.js';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
    
);
