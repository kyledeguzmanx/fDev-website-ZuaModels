import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        imageURL: "./images/logo.png"
     }
    render() { 
        return ( 
            <footer>
                <img src={this.state.imageURL}/>
            </footer>
         );
    }
}
 
export default Footer;