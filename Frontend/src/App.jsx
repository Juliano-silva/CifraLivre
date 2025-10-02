import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import AddUrls from './components/AddUrls.jsx';
import Settings from './components/Settings.jsx';
import FilterLink from './my_creater/FilterLink.jsx';
import './style.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-urls" element={<AddUrls />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/filterlink" element={<FilterLink />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

