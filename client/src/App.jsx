import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import Blog from './pages/blog'

function App() {
  return (
    <div>
        <Router>
          <Routes>

            <Route path="/" exact element={<Home/>} />
            {/* <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} /> */}
            <Route path="/blog"  exact element={<Blog/>}/> 
          </Routes>
      </Router>
    </div>
    
  )
}

export default App
