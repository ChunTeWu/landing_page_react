import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Register from './components/register';
import Steps from './components/sectionSteps';
import Banner from './components/sectionBanner';
import Video from './components/sectionVideo';
import Articles from './components/sectionArticles';
import Count from './components/sectionCount';
import BottomRegister from './components/sectionBottomRegister';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <main>
        <Nav/>
        <Register/>
        <Steps/>
        <Banner/>
        <Video/>
        <Articles/>
        <Count/>
        <BottomRegister/>
        <Footer/>
      </main>
    );
  }
}

export default App;
