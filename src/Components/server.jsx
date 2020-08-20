import React, {Component} from 'react';

class Server extends Component {
    state = { 
        serverInfo: "unknown",
        serverError: ""
    };

    componentDidMount() {
        this.setServerStatus(this.props.url);
    }
     
    render() { 
        let classes = this.getServerClass();
        return ( 
            <div className={classes}>
          
            </div>
         );
    }

    getServerClass() {
        let classes ="status-";
        if (this.state.serverInfo === "up") {
            classes += "up";
        }
        else if (this.state.serverInfo === 'down') {
            classes += "down";
        } else {
            classes += "unknown";
        }
        return classes;
    }

    setServerStatus(endpointURL) {
        const request = require('request');
        request(endpointURL, function (error, response, body) {
            console.log('Type of response: ' + typeof response);
            if(typeof response === "undefined")
            {
                this.setState({serverInfo: 'unknown'});
            } else {
                if(error) {
                    this.setState({serverInfo: 'unknown'});
                }
                else
                {
                    if(response.statusCode.toString().substring(0,1) === '2')
                    {
                        this.setState({serverInfo: 'up'});
                    }
                    else {
                        this.setState({serverInfo: 'down'});
                    }
                }
            }
            
        }.bind(this));
    }
}
 
export default Server;

