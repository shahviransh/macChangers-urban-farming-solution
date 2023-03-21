import React from 'react'
import './ImageGallery.css'
const ImageGallery = () => {
    const track = document.getElementById("image-track");

    // const images = 
    
    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;
    
    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";  
      track.dataset.prevPercentage = track.dataset.percentage;
    }
    
    const handleOnMove = e => {
      if(track.dataset.mouseDownAt === "0") return;
      
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;
      
      const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
      
      track.dataset.percentage = nextPercentage;
      
      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });
      
      for(const image of track.getElementsByClassName("image")) {
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      }
    }
    
    /* -- Had to add extra lines for touch events -- */
    
    window.onmousedown = e => handleOnDown(e);
    
    window.ontouchstart = e => handleOnDown(e.touches[0]);
    
    window.onmouseup = e => handleOnUp(e);
    
    window.ontouchend = e => handleOnUp(e.touches[0]);
    
    window.onmousemove = e => handleOnMove(e);
    
    window.ontouchmove = e => handleOnMove(e.touches[0]);
  return (

    <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
        <img class="image" src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
        <img class="image" src="https://media.discordapp.net/attachments/981697658894839848/1081131775272689684/Timmy_sleek_blue_luxury_sports_car_in_motion_8k_hdr_raytracing__b7cd264a-7cc9-4077-9c9c-42bd8ad1ed9f.png?width=701&height=701" draggable="false" />    
        <img class="image" src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
        <img class="image" src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
        <img class="image" src="https://media.discordapp.net/attachments/942504198887583814/1081114747266662410/Timmy_sleek_blue_luxury_sports_car_in_motion_8k_hdr_raytracing__2bbb607d-5581-441d-b0ae-b8d7be0419dc.png?width=701&height=701" draggable="false" />
        <img class="image" src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
        <img class="image" src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
        <img class="image" src="https://media.discordapp.net/attachments/981697658894839848/1081132031481753650/Timmy_sleek_blue_luxury_sports_car_in_motion_8k_hdr_raytracing__8b404074-8bd5-4ccc-a88d-67c3f771f500.png?width=701&height=701" draggable="false" />
        <img class="image" src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
        <img class="image" src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
        <img class="image" src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
      </div>

  )
}

export default ImageGallery
