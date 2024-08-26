import React from 'react';
import './App.sass';
import Header from "./components/header/Header";
import Hello from "./pages/hello/Hello";
import Game from "./pages/game/Game";
import Screansaver from "./pages/screensaver/Screansaver";
import Footer from "./components/footer/Footer";
import NewCollections from "./pages/new_collections/NewCollections";
import Collections from "./pages/collections/Collections";

const App = () => {
  return (
      <div>
        <Header/>
        <Hello/>
          <section id="new-collection">
              <NewCollections />
          </section>
          <section id="catalog">
              <Collections />
          </section>
        <Screansaver/>
          <section id="game">
              <Game />
          </section>
        <Footer/>
      </div>
  );
};

export default App;
