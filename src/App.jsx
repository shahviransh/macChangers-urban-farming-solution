import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import ImageGallery from './components/ImageGallery'

import Positions from './components/Positions'
function App() {
  const [count, setCount] = useState(0);
  const images = [
    "https://cdn.degreesearch.org/images/study_areas/agriculture-original.jpg?47856",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwY_ieU0RnV_TUrkL1qn4y53K-j_tCf-d3w&usqp=CAU",
    "https://www.forbesindia.com/media/images/2021/Jul/img_163501_urbanfarms.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs_KXV6gCXXMTDMmtjvhpU7W52l53J4nBuyg&usqp=CAU",
    "https://santropolroulant.org/wp-content/uploads/2019/02/UA-survey-944x472.jpg",
    "https://www.foodwork.ca/photos/w/22-11/66148/rrcrc-03-social-harvest-volunteers.jpg",
    "https://www.foodwork.ca/photos/w/18-02/44218/egp-01.jpg",
    "https://www.foodwork.ca/photos/w/17-05/40727/tcv-01.jpg",
    "https://static.wixstatic.com/media/7f50ad_eca41e1d6c0441329c4d261e4a7d2cd6~mv2.jpg/v1/crop/x_108,y_0,w_1704,h_1440/fill/w_656,h_570,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_1185.jpg",
    "https://cff2.earth.com/uploads/2019/05/21201358/joshua-lanzarini-727350-unsplash-1024x683.jpg"
  ];

  return (
    <div class="bg-gradient-to-br from-[#ffffff] to-[#6fdcf7]">
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