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

import { Routes, Route, useParams } from 'react-router-dom';

import DefaultContent from "./components/defaultContent/DefaultContent.js";
import ArtikkelContent from './components/artikkelContent/ArtikkelContent.js';
import ArtikkelContentById from './components/artikkelContent/ArtikkelContentById';
import TabelContent from './components/tabelContent/TabelContent.js';
import NotFoundPage from './components/notFoundPage/NotFoundPage.js';
import NoudedContent from './components/noudedContent/NoudedContent.js';
import GameOfLife from './components/gameContent/GameOfLife.js';
import Layout from './components/Layout.js';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<DefaultContent/>}/>
          <Route path='intro' element={<NoudedContent/>}/>
          <Route path='article' element={<ArtikkelContent/>}/>
          <Route path='article/:id' element={<ArtikkelContentById/>} />
          <Route path='list' element={<TabelContent/>}/>
          <Route path='life' element={<GameOfLife/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
          <Route path='article/:id' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
  );
}
export default App;

