import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <h1>Matheus Kildere</h1>
      
      <h2><a title='LinkedIn' href= 'https://www.linkedin.com/in/matheus-kildere-35947618b/'>LinkedIn</a></h2>
      <h2><a title='GitHub' href= 'https://github.com/matheuskildere'>GitHub</a></h2>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
