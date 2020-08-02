import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage'
import Recommendedvid from './Recommendedvid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
          <Route path = "/search/:searchTerm" >  
          <div className="app-page">
          <Sidebar />
          <SearchPage />
          </div>
          </Route>
          <Route path = "/" >
               <div className="app-page">
                  <Sidebar />
                  <Recommendedvid />
               </div> 
          </Route>
          
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
