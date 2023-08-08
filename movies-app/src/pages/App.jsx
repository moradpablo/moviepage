import React, { Suspense, lazy } from 'react';
import Header from '../header';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const HomeRoutes = lazy(() => import('../home'));
const MovieDetails = lazy(() => import('../details'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeRoutes />} />
          <Route path="/movie" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
