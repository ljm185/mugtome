import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PostContainer from './PostContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mugtome</h1>
        <img src="https://www.ikea.com/PIAimages/0713396_PE729489_S5.JPG?f=s" className="App-logo" alt="logo" />
        <PostContainer />
      </header>
    </div>
  );
}

export default App;
