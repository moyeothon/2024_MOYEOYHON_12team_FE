import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';
import GlobalStyles from '@/styles/GlobalStyles'

function App() {

  return (
    <>
    <GlobalStyles />
      <Router>
        <AppRouter />
      </Router>
    </>
  )
}

export default App
