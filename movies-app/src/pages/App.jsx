import React, { Suspense, lazy } from 'react';
import Header from '../header';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingCircle from '../Shared/loadingCircle';

const HomeRoutes = lazy(() => import('../home'));
const MovieDetails = lazy(() => import('./MovieDetails'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<LoadingCircle />}>
        <Routes>
          <Route path="/" element={<HomeRoutes />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
