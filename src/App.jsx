import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import ImageGallery from './components/ImageGallery'

import Positions from './components/Positions'
function App() {
  const [count, setCount] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://media.discordapp.net/attachments/981697658894839848/1081131775272689684/Timmy_sleek_blue_luxury_sports_car_in_motion_8k_hdr_raytracing__b7cd264a-7cc9-4077-9c9c-42bd8ad1ed9f.png?width=701&height=701",
    "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://media.discordapp.net/attachments/942504198887583814/1081114747266662410/Timmy_sleek_blue_luxury_sports_car_in_motion_8k_hdr_raytracing__2bbb607d-5581-441d-b0ae-b8d7be0419dc.png?width=701&height=701",
    "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://media.discordapp.net/attachments/981697658894839848/1081132031481753650/Timmy_sleek_blue_luxury_sports_car_in_motion_8k_hdr_raytracing__8b404074-8bd5-4ccc-a88d-67c3f771f500.png?width=701&height=701",
    "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
    "https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80",
    "https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  ];

  return (
    <div class="bg-gradient-to-br from-[#8bce21] to-[#5884FB]">
      <Navbar />
      <div className='App'>
        {/* <ImageGallery/> */}
        <Positions />
      </div>
      <div class="relative flex overflow-x-hidden">
        <div class="flex flex-row h-40 w-40 animate-marquee">
          {images.map((image) => (
            <img class="mx-0 my-0 rounded-full border-4 hover:border-[#5884FB]" src={image} draggable="false" />
          ))}
        </div>
        <div class="absolute flex flex-row h-40 w-40 animate-marquee2">
          {images.map((image) => (
            <img class="mx-0 my-0 rounded-full border-4 hover:border-[#5884FB]" src={image} draggable="false" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App