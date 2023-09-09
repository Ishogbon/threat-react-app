import './index.css';
import CheckTransferForUser from './components/top_components/front-fingerprint';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <React.StrictMode>
        <CheckTransferForUser color='blue'/>
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement
);
