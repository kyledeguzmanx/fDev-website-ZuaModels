import React, { Component } from 'react';


class MainContent extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        currentPage : "Home"
     }
    render() { 
        const result = this.getHomepage();
        return result;
    }

    getHomepage(){
        return(
            <main>
            <h1>Homepage</h1>
            </main>
        );
    }
    getMens(){
        return(
            <main>
            <h1>Mens</h1>
            </main>
        );
    }
    getWoens(){
        return(
            <main>
            <h1>Womens</h1>
            </main>
        );
    }
}
 
export default MainContent;