import React, { Component } from 'react';

const sVersion = "ver 0.9.9 (J2K)";

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
    callback(path, text)
  } catch(error) {
    console.error(error);
  }
}

let sFData = "no data";

interface IState {
  text_s: string
  width_s?: string
  height_s?: string
  stage_s?: number
  text2_s?: string
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
    this.handleTextChange = this.handleTextChange.bind(this);
    this.setTAText = this.setTAText.bind(this)
    this.setTAText2 = this.setTAText2.bind(this)
    this.state = {text_s: "hello to Mx 1", height_s: '250', width_s: '580'};
    const sFile = props.file_p || '1.txt'
    //this.sGetData(location.href + '/data/' + this.sFile);
    //sGetDataX(location.href + '/data/' + sFile, this.setTAText);
    sGetDataX(location.href + '/data/' + '2.txt', this.setTAText);
    sGetDataX(location.href + '/data/' + '1.txt', this.setTAText2);
    this.state = {text_s: "hello to Mx\n", stage_s: 0, height_s: '250', width_s: '580'};
    //this.state = {text_s: '', level_s: 2}
  }

  setTAText(path: string, text: string) {
    console.log("infunc1: " + path + " done.");
    const nStage = this.state.stage_s || 0
    this.setState({text_s: "inner1: " + text, stage_s: nStage+1})
    const sMsg = (this.state.stage_s && this.state.stage_s >= 2) ? " ALL data" : "waiting more..."
    console.log(sMsg);
  }

  setTAText2(path: string, text: string) {
    console.log("infunc2: " + path + " done.");
    const nStage = this.state.stage_s || 0
    this.setState({text2_s: "inner2: " + text, stage_s: nStage+1})
    const sMsg = (this.state.stage_s && this.state.stage_s >= 2) ? " ALL data" : "waiting more..."
    console.log(sMsg);
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
        {"===>"}<br /><h4>{this.state.text2_s}</h4><br />{"<==="}
      </>
    );
  }
}
