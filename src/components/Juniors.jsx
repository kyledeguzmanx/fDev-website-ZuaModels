import React, { Component } from 'react';

class Juniors extends Component {
    constructor(props) {
        super(props);

        const models = [
            {
                name: "Amerigo Valenti",
                imgProfile:  "./images/Models/placeholder.jpg",
                imgShoot:  "./images/Models/placeholder-MS.jpg"
            },
            {
                name: "Anwar Hadid",
                imgProfile:  "./images/Models/placeholder.jpg",
                imgShoot:  "./images/Models/placeholder-MS.jpg"
            },
            {
                name: "Alton Mason",
                imgProfile: "./images/Models/placeholder.jpg",
                imgShoot: "./images/Models/placeholder-MS.jpg"
            },
            {
                name: "Bom Chan Lee",
                imgProfile: "./images/Models/placeholder.jpg",
                imgShoot: "./images/Models/placeholder-MS.jpg"
            },
            {
                name: "Charlie Knepper",
                imgProfile: "./images/Models/placeholder.jpg",
                imgShoot: "./images/Models/placeholder-MS.jpg"
            },
            {
                name: "Hudson Taylor",
                imgProfile: "./images/Models/placeholder.jpg",
                imgShoot: "./images/Models/placeholder-MS.jpg"
            },
            {
                name: "Joe Rodonis",
                imgProfile: "./images/Models/placeholder.jpg",
                imgShoot: "./images/Models/placeholder-MS.jpg"
            },
            {
                name: "Kohei",
                imgProfile: "./images/Models/placeholder.jpg",
                imgShoot: "./images/Models/placeholder-MS.jpg"
            },
            {
                name: "Niyo Malik",
                imgProfile: "./images/Models/placeholder.jpg",
                imgShoot: "./images/Models/placeholder-MS.jpg"
            },
            {
                name: "Oli Lacey",
                imgProfile: "./images/Models/placeholder.jpg",
                imgShoot: "./images/Models/placeholder-MS.jpg"
            },
            {
                name: "Peter Dupont",
                imgProfile: "./images/Models/placeholder.jpg",
                imgShoot: "./images/Models/placeholder-MS.jpg"
            },
            {
                name: "Tyson Ballou",
                imgProfile: "./images/Models/placeholder.jpg",
                imgShoot: "./images/Models/placeholder-MS.jpg"
            },
            {
                name: "Victor Norlander",
                imgProfile: "./images/Models/placeholder.jpg",
                imgShoot: "./images/Models/placeholder-MS.jpg"
            },
            {
                name: "Wang Chen Ming",
                imgProfile: "./images/Models/placeholder.jpg",
                imgShoot: "./images/Models/placeholder-MS.jpg"
            }
        ]

        this.state = {
            models
        }
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
                </section>
            </main>
          );
    }
}
 
export default Juniors;