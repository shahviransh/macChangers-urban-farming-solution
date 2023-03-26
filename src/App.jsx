import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import ImageGallery from './components/ImageGallery'

import Positions from './components/Positions'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="overflow-y:auto">
      <Navbar/>
      {/* <ImageGallery/> */}
      <Positions/>
    </div>

  )
}

export default App
