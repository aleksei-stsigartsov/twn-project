import './assets/fonts/BoosterNextFY-Black.woff';
import './assets/fonts/BoosterNextFY-Black.woff2';
import './assets/fonts/BoosterNextFY-Bold.woff';
import './assets/fonts/BoosterNextFY-Bold.woff2';
import './assets/fonts/BoosterNextFY-Light.woff';
import './assets/fonts/BoosterNextFY-Light.woff2';
import './assets/fonts/BoosterNextFY-Medium.woff';
import './assets/fonts/BoosterNextFY-Medium.woff2';
import './assets/fonts/BoosterNextFY-Regular.woff';
import './assets/fonts/BoosterNextFY-Regular.woff2';
import './assets/fonts/BoosterNextFY-Thin.woff';
import './assets/fonts/BoosterNextFY-Thin.woff2';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import DefaultContent from "./components/defaultContent/DefaultContent.js";
import ArtikkelContent from './components/artikkelContent/ArtikkelContent.js';
import TabelContent from './components/tabelContent/TabelContent.js';
import NotFoundPage from './components/notFoundPage/NotFoundPage.js';
import Layout from './components/Layout.js';
import GameOfLife from './components/gameContent/GameOfLife.js';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<DefaultContent/>}/>
          <Route path='article' element={<ArtikkelContent/>}/>
          <Route path='list' element={<TabelContent/>}/>
          <Route path='life' element={<GameOfLife/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
