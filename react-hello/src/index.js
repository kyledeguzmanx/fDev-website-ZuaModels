import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {

  return (
    <React.Fragment>
      <Navbar/>
      <Footer/>
    </React.Fragment>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));