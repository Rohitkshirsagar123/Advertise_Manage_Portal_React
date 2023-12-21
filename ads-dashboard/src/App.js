import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import CreateAd from './components/CreateAd';
import Dashboard from './components/Dashboard';
import Formmediaad from './components/FormMediaAd';
import Formtextad from './components/Formtextad';

import "./App.css"

const App = () => {
  return (
    <Router>
      <>
        <Navigation />
        <Routes>
          <Route path="/create-ad" element={<CreateAd />} />
          <Route path="/"  element={<Dashboard />} />
          <Route path="/form-media-ads"  element={<Formmediaad />} />
          <Route path="/form-text-ads"  element={<Formtextad />} />
        </Routes>
        
      </>
    </Router>
  );
}

export default App;
