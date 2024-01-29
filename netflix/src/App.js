import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { Actions ,originals} from './Urls';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={Actions} title='Action'isSmall/>
    </div>
  );
}

export default App;
