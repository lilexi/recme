import React from 'react';
import  './App.css';
import Header from './containers/header/Header.jsx';
import Posts from './containers/posts/Posts.jsx';
import R_menu from './containers/right_menu/Right_menu.jsx';

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <Posts />
      <R_menu />
    </div>
  );
}

export default App;
