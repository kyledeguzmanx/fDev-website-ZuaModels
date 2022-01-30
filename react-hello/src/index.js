import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';



const App = () => {

  return (
    <React.Fragment>
      <Navbar/>
      <Home/>
      <Footer/>
    </React.Fragment>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));