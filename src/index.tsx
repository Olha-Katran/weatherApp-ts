import React from 'react';
import ReactDOM from 'react-dom/client';
import 'localization';
import App from './App';
import './index.scss';
import {Provider} from "react-redux";
import {store} from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);


