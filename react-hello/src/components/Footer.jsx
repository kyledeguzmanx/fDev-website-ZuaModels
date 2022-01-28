import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        imageURL: "./images/logo.png",
        instagramIconPath: "./images/instagram.svg", 
        facebookIconPath: "./images/facebook.svg", 
        twitterIconPath: "./images/twitter.svg"
     }
    render() { 
        return ( 
            <footer>
                <img src={this.state.imageURL}/>
                <a href="tel:+13234367700">+1 323.436.7700</a>
                <div>
                    <img src={this.state.instagramIconPath} alt="" />
                    <img src={this.state.facebookIconPath} alt="" />
                    <img src={this.state.twitterIconPath} alt="" />
                </div>
            </footer>
         );
    }
}
 
export default Footer;