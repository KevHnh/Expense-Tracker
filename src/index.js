import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
    <SpeechProvider appId="e6a89736-0b46-4d67-8c3e-fa6e14abba31" language="en-US">
    <Provider>
        <App/>
    </Provider>
    </SpeechProvider>, 
    document.getElementById('root')
);