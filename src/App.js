import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { ThemeProvider } from './context/theme.js';
import Home from './pages/Home.js';
import AboutPage from './pages/About.js';
import Services from "./pages/Services.js"
import Products from "./pages/Products.js"
import Contact from './pages/Contact.js';
import Test from "./pages/test.js"
import './index.css';

function App() {
  return (
  <>
      <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/services" element={<Services/>} /> 
            <Route path="/products" element={<Products/>} />
            <Route path="/contacts" element={<Contact/>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  </>
  );
}

export default App;
