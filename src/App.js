import React from 'react';
import './App.sass';
import Header from "./components/header/Header";
import Hello from "./pages/hello/Hello";
import NewCollactions from "./pages/new_collections/NewCollections";
import Collactions from "./pages/collections/Collections";
import Game from "./pages/game/Game";
import Screansaver from "./pages/screensaver/Screansaver";

const App = () => {
  return (
      <div>
        <Header/>
        <Hello/>
        <NewCollactions/>
        <Collactions/>
        <Screansaver/>
        <Game/>
      </div>
  );
};

export default App;
