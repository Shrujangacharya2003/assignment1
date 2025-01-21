import React from 'react'
import "./../App.css";

function About() {
  return (
    <>
    <div id='about-content'  >
      <div className="mindset">
        <h1>Master the Mindset</h1>
        <p>Unlock the power of an abundance mindset to navigate financial stress and market uncertainties. We help you break free from emotional decision-making, overcome financial fears, and build confidence with proven strategies.</p>
      </div>
       <img src="src/assets/masterpic.png" alt="" />
       
       
         <button className='trynow-btn'>Learn Now<img src="src/assets/top-right.png" ></img></button>
         </div>
    <div className="game-theory">
      
      <div className="text-con">
      <h1>Game Theory Bucket</h1>
      
        <p>Invest confidently with 70% stable stalwarts for steady returns and  30% high-growth opportunities for dynamic gains, optimized through game theory for smart, balanced investing.</p>
        <button className='trynow-btn-2'>Try NOW<img src="src/assets/top-right.png" ></img></button>
        </div>
      
<img id='Portfolio'
src="src/assets/portfolia.png" alt="" />
    </div>
    </>
   
  )
}

export default About

