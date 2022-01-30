import React, { Component } from 'react';

class Men extends Component {
    constructor(props) {
        super(props);

        const models = [
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
                imgProfile: "./images/Models/JRodonis--PFP.jpg",
                imgShoot: "./images/Models/JRodonis--MS.jpg"
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
            }
        ]
    }
    state = {  }
    render() { 
        return (
            <main>
                 <h1>MEN</h1>
            </main>
          );
    }
}
 
export default Men;