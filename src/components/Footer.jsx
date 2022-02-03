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
                    <img src={this.state.twitterIconPath} alt="" style={{paddingRight:0}} />
                </div>
                <a></a>
                <p>FOR BOOKING INQUIRIES : INFO@ZUAMODELS.COM</p>
                <p>&copy; 2022 · ZUA MODEL MANAGEMENT</p>
            </footer>
         );
    }
}
 
export default Footer;