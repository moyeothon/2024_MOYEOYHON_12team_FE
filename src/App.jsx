import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      App.jsx
      <Router>
        <AppRouter />
      </Router>
    </>
  )
}

export default App
