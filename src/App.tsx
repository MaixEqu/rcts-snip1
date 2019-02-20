import React, { Component } from 'react';

const sVersion = "ver 0.1.1 (J2K)";

export class Main extends Component {
  render() {
    let sVerInfo = `${sVersion}`;
    return (
      <div className="App">
        <header className="App-header">
          <div id="verinfo">{sVerInfo}</div>
          <div id="textareas">textareas</div>
          <div id="textareas2">textareas</div>
        </header>
      </div>
    );
  }
}

interface IState {
  text_s: string
  width_s?: string
  height_s?: string
}
interface IProps {
  file_p?: string
  text_p?: string
  width_p?: string
  height_p?: string
}
export class TextAreas extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const sFile = props.file_p || '1.txt'
    this.sGetData(location.href + '/data/' + sFile);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {text_s: "hello to Mx\n", height_s: '250', width_s: '580'};
  }
  sGetData = async (path: string) => {
    console.log("async: " + path)
    try {
      const response = await fetch(path);
      const text = await response.text();
      //console.log(text);
      this.setState({text_s: text});
      //callback(text)
    } catch(error) {
      console.error(error);
    }
  }
  handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({text_s: e.target.value});
  }
  render() {
    const taStyle = {
      height: this.state.height_s+'px',
      width: this.state.width_s+'px',
      border: "1px solid", 
      verticalAlign: "top",
    };
    return (
      <div>
        <hr />
        <p>In the textarea symbols: [{this.state.text_s.length}]</p>
        <hr />
        <fieldset>
          <legend>Enter text:</legend>
          <div style={{border: "0px solid", verticalAlign: "top"}}>
          <textarea style={taStyle} className="_halfsize" value={this.state.text_s}
              onChange={this.handleTextChange}
          />
          </div>
        </fieldset>
        {"===>"}<br />{this.state.text_s}<br />{"<==="}
      </div>
    );
  }
}
