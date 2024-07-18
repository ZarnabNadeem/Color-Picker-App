import React from 'react'
import { useState } from 'react'

function ColorPicker() {
    const[color, setColor] = useState("#ffffff")
    function handleColorChange(event){
        setColor(event.target.value);

    }
function handleOnClick(){
    const resetBtn = document.getElementById("reset-btn");
const colorPicker = document.querySelector("input[type='color']");
const colorDisplay = document.querySelector(".color-display");


resetBtn.addEventListener("click", () => {
  colorPicker.value = "#ffffff";
  colorDisplay.style.backgroundColor = "#ffffff";
  setColor("#ffffff");
});
}

  return (
    <div className='color-picker-container'>
        <h1>Color Picker</h1>
        <button id="reset-btn" onClick={handleOnClick}>Reset</button>
        <div className='color-display' style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label htmlFor="">Select a Color:</label>
        <input type="color" value={color} onChange={handleColorChange} />
      
    </div>
  )
}

export default ColorPicker

