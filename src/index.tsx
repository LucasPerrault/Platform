import './index.css';
import './i18n';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
    return (
        <div></div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();