import React, { Suspense, lazy } from 'react';
import Header from '../header';
import Home from '../home';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const HomeRoutes = lazy(() => import('../home'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeRoutes />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
