import React from 'react';
import Home from './pages/Home';
import useSmoothScroll from './hooks/useSmoothScroll';

export default function App() {
  useSmoothScroll();

  return <Home />;
}
