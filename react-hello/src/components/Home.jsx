import React, { Component } from 'react';

class Home extends Component {
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
    }
    render() { 
        return ( 
          <main>
            <div id="home-banner">
                <img src={this.state.bannerPath[this.state.bannerImgPath]}></img>
            </div>
          </main>
         );
    }
}
 
export default Home;