import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';

import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='mainApp'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movie/:imdbID' element={<MovieDetails/> } />          
        </Routes>
        <Footer/>
      </Router>      
    </div>
  );
};

export default App;