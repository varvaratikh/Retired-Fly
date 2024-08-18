import React from 'react';
import './App.sass';
import Header from "./components/header/Header";
import Hello from "./pages/hello/Hello";

const App = () => {
  return (
      <div>
        <Header/>
        <Hello/>
      </div>
  );
};

export default App;
