import React, { Component } from 'react';

const sVersion = "ver 0.1.5 (J2K)";

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

const sGetDataX = async (path: string, callback: Function) => {
  console.log("async X: " + path)
  try {
    const response = await fetch(path);
    const text = await response.text();
    //console.log("X: " + text);
    //this.setState({text_s: text});
    callback(text)
  } catch(error) {
    console.error(error);
  }
}

interface IState {
  text_s: string
  width_s?: string
  height_s?: string
  stage_s?: number
}
interface IProps {
  file_p?: string
  text_p?: string
  width_p?: string
  height_p?: string
}
export class TextAreas extends React.Component<IProps, IState> {
  // state = {text_s: "hello to Mx\n", height_s: '250', width_s: '580'};
  // sFile = this.props.file_p || '2.txt'
  constructor(props: IProps) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.setCompState = this.setCompState.bind(this)
    this.state = {text_s: "hello to Mx 1", height_s: '250', width_s: '580'};
    const sFile = props.file_p || '1.txt'
    //this.sGetData(location.href + '/data/' + this.sFile);
    sGetDataX(location.href + '/data/' + sFile, this.setCompState);
    this.state = {text_s: "hello to Mx\n", stage_s: 0, height_s: '250', width_s: '580'};
    //this.state = {text_s: '', level_s: 2}
  }
  setCompState(t: string) {
    console.log("inner func: " + t);
    console.log(this);
    //this.state = {text_s: "hello to Mx 2", height_s: '250', width_s: '580'};
    const nStage = this.state.stage_s || 0
    this.setState({text_s: "inner: " + t, stage_s: nStage+1})
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
      <>
        <hr />
        <p>Stage: ({this.state.stage_s}). In the textarea symbols: [{this.state.text_s.length}]</p>
        <hr />
        <fieldset>
          <legend>4 Enter text:</legend>
          <div style={{border: "0px solid", verticalAlign: "top"}}>
          <textarea style={taStyle} className="_halfsize" value={this.state.text_s}
              onChange={this.handleTextChange}
          />
          </div>
        </fieldset>
        {"===>"}<br /><h4>{this.state.text_s}</h4><br />{"<==="}
      </>
    );
  }
}
