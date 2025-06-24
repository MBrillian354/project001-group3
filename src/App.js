import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Home';
import About from './About';
import Data from './Data';
import Posts from './Posts';
import PostDetail from './postDetails';
import Create from './Create';
import './App.css';
import Navigation from './Navigation';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/data" element={<Data />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/create" element={<Create />} />
            </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
