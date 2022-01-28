import React, { Component } from 'react';


class MainContent extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        currentPage : "Home",
        bannerImgPath: "./images/Homepage/Fenty.jpg"
     }
    render() { 
        
        const result = this.getMainContent();
        return result;
    }

    getMainContent(){
        if(this.state.currentPage == "Home"){
            return(
                <main>
                <h1>Home</h1>
                <div id="home-banner">
                    <img src={this.state.bannerImgPath}></img>
                </div>
                </main>
            );
        }
        else if(this.state.currentPage == "Women"){
            return(
                <main>
                <h1>Womenz</h1>
                </main>
            );
        }
        else if(this.state.currentPage == "Men"){
            return(
                <main>
                <h1>Men 2</h1>
                </main>
            );
        }
    }
}
 
export default MainContent;