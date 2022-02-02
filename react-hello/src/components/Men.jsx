import React, { Component } from 'react';

class Men extends Component {
    constructor(props) {
        super(props);

        const models = [
            {
                name: "Amerigo Valenti",
                imgProfile:  "./images/Models/AValenti-PFP.jpg",
                imgShoot:  "./images/Models/AValenti-MS.jpg"
            },
            {
                name: "Anwar Hadid",
                imgProfile:  "./images/Models/AHadid-PFP.jpg",
                imgShoot:  "./images/Models/AHadid-MS.jpg"
            },
            {
                name: "Alton Mason",
                imgProfile: "./images/Models/AMason-PFP.jpg",
                imgShoot: "./images/Models/AMason-MS.jpg"
            },
            {
                name: "Bom Chan Lee",
                imgProfile: "./images/Models/BLee-PFP.jpg",
                imgShoot: "./images/Models/BLee-MS.jpg"
            },
            {
                name: "Charlie Knepper",
                imgProfile: "./images/Models/CKnepper-PFP.jpg",
                imgShoot: "./images/Models/CKnepper-MS.jpg"
            },
            {
                name: "Hudson Taylor",
                imgProfile: "./images/Models/HTaylor-PFP.jpg",
                imgShoot: "./images/Models/HTaylor-MS.jpg"
            },
            {
                name: "Joe Rodonis",
                imgProfile: "./images/Models/JRodonis-PFP.jpg",
                imgShoot: "./images/Models/JRodonis-MS.jpg"
            },
            {
                name: "Kohei",
                imgProfile: "./images/Models/Kohei-PFP.jpg",
                imgShoot: "./images/Models/Kohei-MS.jpg"
            },
            {
                name: "Niyo Malik",
                imgProfile: "./images/Models/NMalik-PFP.jpg",
                imgShoot: "./images/Models/NMalik-MS.jpg"
            },
            {
                name: "Oli Lacey",
                imgProfile: "./images/Models/OLacey-PFP.png",
                imgShoot: "./images/Models/OLacey-MS.jpg"
            },
            {
                name: "Peter Dupont",
                imgProfile: "./images/Models/PDupont-PFP.jpg",
                imgShoot: "./images/Models/PDupont-MS.jpg"
            },
            {
                name: "Tyson Ballou",
                imgProfile: "./images/Models/TBallou-PFP.jpg",
                imgShoot: "./images/Models/TBallou-MS.jpeg"
            },
            {
                name: "Victor Norlander",
                imgProfile: "./images/Models/VNorlander-PFP.jpg",
                imgShoot: "./images/Models/VNorlander-MS.jpg"
            },
            {
                name: "Wang Chen Ming",
                imgProfile: "./images/Models/WMing-PFP.jpg",
                imgShoot: "./images/Models/WMing-MS.jpg"
            }
        ]

        this.state = {
            models
        }
    }

    render() { 
        return (
            <main>
                 <div className="contain-four">
                    <div className="contain-two">
                        <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[0].imgProfile}></img>
                            </div>
                            <p>{this.state.models[0].name}</p>
                        </div>
                        <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[1].imgProfile}></img>
                            </div>
                            <p>{this.state.models[1].name}</p>
                        </div>
                    </div>
                    <div className="contain-two">
                        <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[2].imgProfile}></img>
                            </div>
                            <p>{this.state.models[2].name}</p>
                        </div>
                        <div className='card-container'>
                            <div className="img-container img-container-last">
                                <img src={this.state.models[3].imgProfile}></img>
                            </div>
                            <p>{this.state.models[3].name}</p>
                        </div>
                    </div>
                 </div>
                 <div className="contain-four"> 
                    <div className="contain-two">
                        <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[4].imgProfile}></img>
                            </div>
                            <p>{this.state.models[4].name}</p>
                        </div>
                        <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[5].imgProfile}></img>
                            </div>
                            <p>{this.state.models[5].name}</p>
                        </div>
                    </div>
                    <div className="contain-two">
                        <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[6].imgProfile}></img>
                            </div>
                            <p>{this.state.models[6].name}</p>
                        </div>
                        <div className='card-container'>
                            <div className="img-container img-container-last">
                                <img src={this.state.models[7].imgProfile}></img>
                            </div>
                            <p>{this.state.models[7].name}</p>
                        </div> 
                    </div>
                 </div>
                 <div className="contain-four">
                    <div className="contain-two">
                        <div className="img-container">
                            <img src={this.state.models[8].imgProfile}></img>
                        </div>
                        <div className="img-container">
                            <img src={this.state.models[9].imgProfile}></img>
                        </div>
                    </div>
                    <div className="contain-two">
                        <div className="img-container">
                            <img src={this.state.models[10].imgProfile}></img>
                        </div>
                        <div class="img-container img-container-last">
                            <img src={this.state.models[11].imgProfile}></img>
                        </div>
                    </div>
                 </div>
                 <div className="contain-four">
                    <div className="contain-two">
                        <div className="img-container">
                            <img src={this.state.models[12].imgProfile}></img>
                        </div>
                        <div className="img-container">
                            <img src={this.state.models[13].imgProfile}></img>
                        </div>
                    </div>
                 </div>
            </main>
          );
    }
}
 
export default Men;