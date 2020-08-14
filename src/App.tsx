import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home'
import Drawer from './components/Drawer'

function App() {
  return (
    <BrowserRouter>
      <Drawer>

      </Drawer>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
