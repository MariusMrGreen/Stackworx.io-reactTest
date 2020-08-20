import React, {Component} from 'react';
import IntervalRenderer from 'react-interval-renderer';

class Server extends Component {
    state = { 
        serverInfo: "Unknown",
        lastPayLoad: "",
        showPayLoad: false
    };

    style = {
        width : 275
    }

    componentDidMount() {
        this.setServerStatus(this.props.url);
    }
    
    handleShow = ()=>{
        if(this.state.showPayLoad) {
            this.setState({
                showPayLoad: false
            })
        } else
        {
            this.setState({
                showPayLoad: true
            });
        }
        
    }

     
    render() { 
        let classes = this.getServerClass();
        return ( 
            <div className={classes} onClick={this.handleShow} style={this.style}>
                <div className="card-header">{this.props.url}</div>
                <div className="card-body">
                    <h5 className="card-title">Health Status: {this.state.serverInfo}</h5>
                    <p>Show/hide info</p>
                    {this.state.showPayLoad ? <p className="card-text">Last Pay Load: {this.state.lastPayLoad} </p> : null}
                </div>
            </div>
         );
    }

    getServerClass() {
        let classes ="card text-white mt-3 ";
        if (this.state.serverInfo === "Up") {
            classes += "bg-success";
        }
        else if (this.state.serverInfo === 'Down') {
            classes += "bg-danger";
        } else {
            classes += "bg-secondary";
        }
        return classes;
    }

    setServerStatus(endpointURL) {
        const request = require('request');
        request(endpointURL, function (error, response, body) {
            console.log('Request Error: ' + error);
            if(error) {
                this.setState({lastPayLoad: error.toString()});
                this.setState({serverInfo: 'Unknown'});
                return;
            }
            if(typeof response === "undefined")
            {
                this.setState({serverInfo: 'Unknown'});
                this.setState({lastPayLoad: 'Unknown Error Occured'});
            } else {
                this.setState({lastPayLoad: body.toString()});
                if(error) {
                    this.setState({lastPayLoad: error.toString()});
                    this.setState({serverInfo: 'Unknown'});
                }
                else
                {
                    if(response.statusCode.toString().substring(0,1) === '2')
                    {
                        this.setState({serverInfo: 'Up'});
                    }
                    else {
                        this.setState({serverInfo: 'Down'});
                    }
                }
            }
            
        }.bind(this));
    }
}
 
export default Server;

