import React from 'react';
import './App.css';
import Nav from './Nav';
import Movielist from './Movielist';
import {MovieProvider} from './MovieContext';
import AddMovie from './AddMovie';

const App = () =>{  
return(
  <MovieProvider>
  <div className="App">
    <Nav />
    <AddMovie />
    <Movielist />
  </div>
  </MovieProvider>
  );
}
export default App;
