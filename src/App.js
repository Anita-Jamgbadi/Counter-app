import React from 'react';
import Banner from './components/banner.js'
import {Display, Intro} from './components/display'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'


function App() {
  return (
    <section className='main-container'>
      <ErrorBoundary>
        <Banner />
      </ErrorBoundary>
      <ErrorBoundary>
        <Intro />
      </ErrorBoundary>
      <ErrorBoundary>
        <Display />
      </ErrorBoundary>
    </section>
  );
}

export default App;
