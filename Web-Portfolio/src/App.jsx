import { useState } from 'react'
import Header from './components/Header'
import PageRouter from './components/PageRouter'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Button } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PageRouter/>
      </div>
    </>
  )
}

export default App
