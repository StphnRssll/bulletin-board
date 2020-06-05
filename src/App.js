import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BulletinBoard from './BulletinBoard';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Resource Bulletin Board!</h1>
      <BulletinBoard />
    </div>
  );
}

export default App;
