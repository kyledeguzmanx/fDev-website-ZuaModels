import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
                        <li><Link to="/women">Women</Link></li>
                        <li><Link to="/men">Men</Link></li>
                        <li><Link to="juniors/">Juniors</Link></li>
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