import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';


const App = () => {

  return (
    <React.Fragment>
      <Navbar/>
      <MainContent/>
      <Footer/>
    </React.Fragment>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));