import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Home';
import About from './About';
import Data from './Data';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>React Router + Redux + API Example</h1>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/data" element={<Data />} />
            </Routes>
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
