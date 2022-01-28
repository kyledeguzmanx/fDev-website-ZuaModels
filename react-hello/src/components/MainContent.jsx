import React, { Component } from 'react';


class MainContent extends Component {
    constructor(props) {
        super(props);

        const bannerPath = [
            "./images/Homepage/item8.jpg",
            "./images/Homepage/Fenty.jpg",
            "./images/Homepage/Dior2.jpg",
            "./images/Homepage/Dior.jpg",
            "./images/Homepage/item4.jpg",
            "./images/Homepage/item5.jpg",
            "./images/Homepage/item6.jpg",
            "./images/Homepage/item7.jpg",
            "./images/Homepage/givency.jpg"
            
        ]
        this.state = { 
            bannerPath,
            bannerImgPath: 0,
            currentPage : "Home"
         }
    }
    

    componentDidMount() {
      this.interval = setInterval(() => this.changeImage(), 4000);
    }
    componentWillUnmount() {
        if (this.interval) {
          clearInterval(this.interval); 
        }
    }
    changeImage() {
        let newCurrentImg = 0;
        const bannerPath = this.state.bannerPath;
        const bannerImgPath = this.state.bannerImgPath;
        const noOfImages = bannerPath.length;
        
        if (bannerImgPath !== noOfImages - 1) {
          newCurrentImg = bannerImgPath + 1;
        }
  
        this.setState({bannerImgPath: newCurrentImg});
        console.log(this.state.bannerImgPath);
    }
    render() { 
        
        const result = this.getMainContent();
        return result;
    }

    getMainContent(){
        if(this.state.currentPage == "Home"){
            return(
                <main>
                <div id="home-banner">
                    <img src={this.state.bannerPath[this.state.bannerImgPath]}></img>
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