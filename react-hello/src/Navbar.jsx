import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <nav>
                <div id="nav-logo">
                    <img></img>
                </div>
                <div>
                    <ul>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Juniors</li>
                    </ul>
                    <a href=""> &#9776;</a>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;