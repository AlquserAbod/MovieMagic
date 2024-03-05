import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add'
import Watched from './pages/Watched/Watched'
import Watchlist from './pages/Watchlist/Watchlist'

import  ContextProvider  from './Context/GlobelContext';
import Movies from './pages/Movies/Movies';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter basename='/'>

      <ContextProvider>
        <Header />
        <Routes>
          
          <Route exact  path='/' element={<Add />} />
          <Route path='/add' element={<Add/>} />
          <Route path='/watchlist' element={<Watchlist/>} />
          <Route path='/watched' element={<Watched/>} />
          <Route path='/movies/:type' element={<Movies />} />
          

          <Route path='*' element={<NotFound />} />

        </Routes>
        <Footer />
      </ContextProvider>
    </BrowserRouter>

  );
}

export default App;
