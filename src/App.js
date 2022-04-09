import React from 'react';

import { AboutUs, Chef, Curtain, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, ArtGallery } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Curtain />
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <ArtGallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
