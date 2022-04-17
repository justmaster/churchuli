import React from 'react';
import Main from './main';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';



const App = () => {



return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} >
        <Route path="/:langId" element={<Main />} />
      </Route>
      
    </Routes>
  </BrowserRouter>
)};

export default App;
