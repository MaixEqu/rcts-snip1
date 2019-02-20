import React from 'react';
import ReactDOM from 'react-dom';
import * as App from './App';

ReactDOM.render(<App.Main />, document.getElementById('root'));
ReactDOM.render(<App.TextAreas />, document.getElementById('textareas'));
//const compTA2 = <App.TextAreas file_p = "1.txt" />
//const oTA2: any = ReactDOM.render(compTA2, document.getElementById('textareas2'));
//console.log(oTA2);
//oTA2.setCompState();
//oTA2.render();
//oTA2.setState({text_s: "sdfsdf 22"});

//compTA2.setCompState() //.setState({text_s: "hello TA 2", height_s: '50', width_s: '70'})
