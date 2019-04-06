import React, { Component } from 'react';
import MenuBar from '../components/MenuBar';
import Intro from '../components/Intro';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import styles from '../css/main.scss';

class App extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <Intro />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
