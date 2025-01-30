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
      <div className="about-man">
      <img  className='about-man-img'  src="src/assets/man.png" alt="" />
      </div>
      <div className="about-1">
              <img className="icon-about-1" src="src/assets/diy.png" alt="Bar Chart" />
              <span className="text-about-1">Are you spending countless hours on day trading and DIY <br /> investing with little to no impact on your financial growth?</span>
              
            </div>
            <div className="about-2">
              <img className="icon-about-2" src="src/assets/about2.png" alt="Bar Chart" />
              <span className="text-about-2">How do you handle emotions of greed and <br /> fear in your financial life?</span>
              
            </div>
            <div className="about-3">
              <img className="icon-about-3" src="src/assets/handinhand.png"  />
              <span className="text-about-3">How can you focus on your job/business <br /> and compound wealth stress free?</span>
              
            </div>
            <div className="about-4">
              <img className="icon-about-4" src="src/assets/about4.png"  />
              <span className="text-about-4">How confident are you in your ability to <br /> manage financial stress?       </span>
              
            </div>
      
       
       
         <button className='trynow-btn'>Learn Now<img src="src/assets/top-right.png" ></img></button>
         </div>
    <div className="game-theory">
      
      <div className="text-con">
      <h1>Game Theory Bucket</h1>
      
        <p>Invest confidently with 70% stable stalwarts for steady returns and  30% high-growth opportunities for dynamic gains, optimized through game theory for smart, balanced investing.</p>
        <button className='trynow-btn-2'>Try NOW<img src="src/assets/top-right.png" ></img></button>
        </div>
      
<img className='Portfolio'
src="src/assets/portpolio (1).png" alt="" />
 <div className="portpolio-banner">
        <div className="left">
        <div className='icon'> <img className="star-img" src="src/assets/_x31_.png" alt="" /></div>
            <div class="text"><h1>70/30</h1></div>
            <div class="subtext">Portfolio for Optimal Returns</div>
        </div>
        <div class="divider"></div>
        <div class="right"></div>
    </div>
    </div>
    </>
   
  )
}

export default About

