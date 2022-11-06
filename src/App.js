import React from 'react';
import Banner from './components/banner.js'
import Display from './components/display'
import './App.css';
import ErrorBoundary from './components/ErrorBoundary.js';

function App() {
  return (
    <section className='main-container'>
      <ErrorBoundary>
        <Banner />
      </ErrorBoundary>
      <ErrorBoundary>
        <Display />
      </ErrorBoundary>
    </section>
  );
}

export default App;
