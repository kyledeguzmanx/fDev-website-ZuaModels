import React, { Component } from 'react';

class Women extends Component {
    constructor(props) {
        super(props);

        const models = [
            {
                name: "Alek Wek",
                imgProfile:  "./images/Models/AWek-PFP.jpg",
                imgShoot:  "./images/Models/AWek-MS.jpg"
            },
            {
                name: "Alexis Ruby",
                imgProfile:  "./images/Models/ARuby-PFP.jpg",
                imgShoot:  "./images/Models/ARuby-MS.jpg"
            },
            {
                name: "alyssah ali",
                imgProfile: "./images/Models/AAli-PFP.jpg",
                imgShoot: "./images/Models/AAli-MS.jpg"
            },
            {
                name: "barbara palvin",
                imgProfile: "./images/Models/BPalvin-PFP.jpg",
                imgShoot: "./images/Models/BPalvin-MS.jpg"
            },
            {
                name: "bella hadid",
                imgProfile: "./images/Models/BHadid-PFP.jpg",
                imgShoot: "./images/Models/BHadid-MS.jpg"
            },
            {
                name: "chanel iman",
                imgProfile: "./images/Models/CIman-PFP.jpg",
                imgShoot: "./images/Models/CIman-MS.jpg"
            },
            {
                name: "charlee fraser",
                imgProfile: "./images/Models/CFraser-PFP.jpg",
                imgShoot: "./images/Models/CFraser-MS.jpg"
            },
            {
                name: "Daria Werbowy",
                imgProfile: "./images/Models/DWerbowy-PFP.jpg",
                imgShoot: "./images/Models/DWerbowy-MS.jpg"
            },
            {
                name: "Du Juan",
                imgProfile: "./images/Models/DJuan-PFP.jpg",
                imgShoot: "./images/Models/DJuan-MS.jpg"
            },
            {
                name: "Elsa hosk",
                imgProfile: "./images/Models/EHosk-PFP.jpg",
                imgShoot: "./images/Models/EHosk-MS.jpg"
            },
            {
                name: "ellie thumann",
                imgProfile: "./images/Models/EThumann-PFP.jpg",
                imgShoot: "./images/Models/EThumann-MS.jpg"
            },
            {
                name: "georgia fowler",
                imgProfile: "./images/Models/GFowler-PFP.jpg",
                imgShoot: "./images/Models/GFowler-MS.jpg"
            },
            {
                name: "Hyunji Shin",
                imgProfile: "./images/Models/HShin-PFP.jpg",
                imgShoot: "./images/Models/HShin-MS.jpg"
            },
            {
                name: "Jennifer Atilemile",
                imgProfile: "./images/Models/JAtilemile-PFP.jpg",
                imgShoot: "./images/Models/JAtilemile-MS.jpg"
            }
            ,
            {
                name: "jessica strother",
                imgProfile: "./images/Models/JStrother-PFP.jpg",
                imgShoot: "./images/Models/JStrother-MS.jpg"
            },
            {
                name: "Julia Hafstrom",
                imgProfile: "./images/Models/JHafstrom-PFP.jpg",
                imgShoot: "./images/Models/JHafstrom-MS.jpg"
            },
            {
                name: "julia van os",
                imgProfile: "./images/Models/JOs-PFP.jpg",
                imgShoot: "./images/Models/JOs-MS.jpg"
            },
            {
                name: "kamila hansen",
                imgProfile: "./images/Models/KHansen-PFP.jpg",
                imgShoot: "./images/Models/KHansen-MS.jpg"
            }
        ]

        this.state = {
            models
        }
    }
    setOnHover(){

    }
    setAfterHover(){

    }

    render() { 
        return (
            <main>
                <section id="main-gallery">
                    <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[0].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[0].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[0].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[0].name}</p>
                        </div>
                        <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[1].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[1].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[1].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[1].name}</p>
                        </div>
                        <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[2].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[2].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[2].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[2].name}</p>
                        </div>
                        <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[3].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[3].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[3].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[3].name}</p>
                        </div>
                        <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[4].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[4].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[4].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[4].name}</p>
                        </div>
                        <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[5].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[5].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[5].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[5].name}</p>
                        </div>
                        <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[6].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[6].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[6].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[6].name}</p>
                        </div>
                        <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[7].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[7].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[7].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[7].name}</p>
                        </div> 
                        <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[8].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[8].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[8].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[8].name}</p>
                        </div>
                        <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[9].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[9].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[9].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[9].name}</p>
                        </div>
                        <div className='card-container'>
                            <div className="img-container">
                                <img src={this.state.models[10].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[10].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[10].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[10].name}</p>
                        </div>
                        <div className='card-container'> 
                            <div class="img-container">
                                <img src={this.state.models[11].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[11].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[11].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[11].name}</p>
                        </div>
                        <div className='card-container'> 
                            <div className="img-container">
                                <img src={this.state.models[12].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[12].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[12].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[12].name}</p>
                        </div>
                        <div className='card-container'> 
                            <div className="img-container">
                                <img src={this.state.models[13].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[13].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[13].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[13].name}</p>
                        </div>
                        <div className='card-container'> 
                            <div className="img-container">
                                <img src={this.state.models[14].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[14].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[14].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[14].name}</p>
                        </div>
                        <div className='card-container'> 
                            <div className="img-container">
                                <img src={this.state.models[15].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[15].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[15].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[15].name}</p>
                        </div>
                        <div className='card-container'> 
                            <div className="img-container">
                                <img src={this.state.models[16].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[16].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[16].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[16].name}</p>
                        </div>
                        <div className='card-container'> 
                            <div className="img-container">
                                <img src={this.state.models[17].imgProfile} onMouseOver={img => (img.currentTarget.src= this.state.models[17].imgShoot)} onMouseOut={img => (img.currentTarget.src= this.state.models[17].imgProfile)}></img>
                            </div>
                            <p>{this.state.models[17].name}</p>
                        </div>
                </section>
            </main>
          );
    }
}
 
export default Women;