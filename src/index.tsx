import React from 'react';
import ReactDOM from 'react-dom';
import * as App from './App';

ReactDOM.render(<App.Main />, document.getElementById('root'));
ReactDOM.render(<App.TextAreas />, document.getElementById('textareas'));
const compTA2 = <App.TextAreas file_p = "2.txt"/>
ReactDOM.render(compTA2, document.getElementById('textareas2'));
