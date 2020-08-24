import React, { Component } from "react";
import ReactDOM from "react-dom";

class Server extends Component {
  state = {
    serverInfo: "Unknown",
    lastPayLoad: "",
    showPayLoad: false,
    healthyTime: null,
    seconds: 0,
    serverId: "server-" + this.props.serverId,
  };

  // Do your operations

  style = {
    width: 275,
  };

  componentDidMount() {
    this.setServerStatus(this.props.url);
  }

  handleShow = () => {
    if (this.state.showPayLoad) {
      this.setState({
        showPayLoad: false,
      });
    } else {
      this.setState({
        showPayLoad: true,
      });
    }
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    this.interval = setInterval(() => {
      if (this.state.healthyTime != null) {
        this.setState({
          seconds: Math.round(
            (new Date().getTime() -
              new Date(this.state.healthyTime).getTime()) /
              1000
          ),
        });
      }
      const timerElement = (
        <>
          <p>Up Time: {this.state.seconds} seconds</p>
        </>
      );
      ReactDOM.render(
        timerElement,
        document.getElementById("server-" + this.state.serverId)
      );
    }, 1000);
    let classes = this.getServerClass();

    return (
      <div className={classes} onClick={this.handleShow} style={this.style}>
        <div className="card-header">{this.props.url}</div>
        <div className="card-body">
          <h5 className="card-title">Health Status: {this.state.serverInfo}</h5>
          <div id={"server-" + this.state.serverId}></div>
          <p>Show/hide info</p>

          {this.state.showPayLoad ? (
            <p className="card-text">
              Last Pay Load: {this.state.lastPayLoad}{" "}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  getServerClass() {
    let classes = "card text-white mt-3 ";
    if (this.state.serverInfo === "Up") {
      classes += "bg-success";
    } else if (this.state.serverInfo === "Down") {
      classes += "bg-danger";
    } else {
      classes += "bg-secondary";
    }
    return classes;
  }

  setServerStatus(endpointURL) {
    const request = require("request");
    request(
      endpointURL,
      function (error, response, body) {
        console.log("Request Error: " + error);
        if (error) {
          this.setState({ lastPayLoad: error.toString() });
          this.setState({ serverInfo: "Unknown" });
          return;
        }
        if (typeof response === "undefined") {
          this.setState({ serverInfo: "Unknown" });
          this.setState({ lastPayLoad: "Unknown Error Occured" });
          this.setState({ healthyTime: null });
        } else {
          this.setState({ lastPayLoad: body.toString() });
          if (error) {
            this.setState({ lastPayLoad: error.toString() });
            this.setState({ serverInfo: "Unknown" });
          } else {
            if (response.statusCode.toString().substring(0, 1) === "2") {
              if (this.state.serverInfo !== "Up") {
                this.setState({ healthyTime: new Date() });
              }
              this.setState({ serverInfo: "Up" });
            } else {
              this.setState({ serverInfo: "Down" });
              this.setState({ healthyTime: null });
            }
          }
        }
      }.bind(this)
    );
  }
}

export default Server;
