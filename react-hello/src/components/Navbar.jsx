import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        imageURL: "./images/logo.png",
     }
    render() { 
        return ( 
            <nav>
                <div id="nav-logo">
                    <img src={this.state.imageURL}></img>
                </div>
                <div id="nav-link">
                    <ul>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Juniors</a></li>
                    </ul>
                    <div>
                        <a href=""> &#9776;</a>
                    </div>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;