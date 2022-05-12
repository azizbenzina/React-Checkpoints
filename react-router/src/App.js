import './App.css';

import AppBar from './AppBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MovieList from './MovieList';
import MovieDesc from './MovieDesc';

function App() {
  return (
    <Router>
      <div className="App">
           <br />
           <br />
          <AppBar/>
      <div className='content'>
       <Routes>
       <Route path="/"  />
       <Route path="/movies" element={<MovieList/>}/>
       <Route path="/movie/:id/" element={<MovieDesc/>}/>
       </Routes>
        </div>

    </div>
    </Router>

  );
}

export default App;
