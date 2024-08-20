import React from 'react';
import './App.sass';
import Header from "./components/header/Header";
import Hello from "./pages/hello/Hello";
import NewCollactions from "./pages/new_collections/NewCollections";

const App = () => {
  return (
      <div>
        <Header/>
        <Hello/>
        <NewCollactions/>
      </div>
  );
};

export default App;
