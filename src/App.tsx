import React, { Component } from "react";
import "./App.css";
import GridGenerator from "./Components/GridGenerator";
import Server from "./Components/server";
import Input from "./Components/Input";

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      columns: 4,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(state: any) {
    this.setState(state);
  }

  componentDidMount() {}

  endpointURLs = [
    "http://httpstat.us/200",
    "http://httpstat.us/300",
    "http://httpstat.us/500",
    "httpstat.us/200",
    "http://httpstat.us/201",
    "http://httpstat.us/202",
    "https://dev.vantage.run/health",
    "http://httpstat.us/204",
    "http://httptat.us/404",
    "http://httpstat.us/405",
    "http://httpstat.us/406",
    "http://www.google.com",
  ];

  onInputChage(value: number) {
    this.setState({ columns: value });
  }

  render() {
    return (
      <div>
        {/* <Input onChange={this.onInputChage} /> */}
        <GridGenerator cols={4}>
          {this.endpointURLs.map((value, index) => {
            return <Server key={value} url={value} serverId={index}></Server>;
          })}
        </GridGenerator>
      </div>
    );
  }
}

export default App;
