import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Recommendedvid from './Recommendedvid';

function App() {
  return (
    <div className="app">
      {/*<h1>Youtube-clone</h1>*/}
      <Header />
      <div className="app-page">
      <Sidebar />
      <Recommendedvid />
      </div>
      
    </div>
  );
}

export default App;
