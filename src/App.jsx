import React from 'react';
import Header from './components/Header';
import GameList from './components/GameList';
import Footer from './components/Footer';
import Joki from './components/Joki';
import Tp from './components/Tp';
import Pm from './components/pm';
import About from './components/About';
import ML from './TopUp/ML';

function App() {
  return (
    <>
      <Header />
      <GameList />
      <Joki />
      <Tp />
      <Pm />     
      <About />
      <Footer />
    </>
  );
}

export default App;