import React, {Component} from 'react';

class Server extends Component {
    state = { 
        serverInfo: "unknown"
    };

     
    render() { 
        
        let classes = this.getServerClass();
        console.log(this.classes);

        
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
}
 
export default Server;

// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });