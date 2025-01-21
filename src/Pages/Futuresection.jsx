import React from 'react'

function Futuresection() {
  return (
    <>
      <div className='finalcontainer' >
        <div className="container">
          <header className='C-header'>
            <h1>Focus on What – Truly Matters</h1>
            <p>
              Let <span className="highlight">InvestVidhi</span> handle your <span className="highlight">finances</span> while you focus on what <span className="highlight">truly matters</span>. Seamlessly <span className="highlight">grow your wealth</span> with us.
            </p>
          </header>
          <main>
            <div className="image-set">
              <img  className='imageset-img' src="src/assets/Secfurure.1[1].png" alt="" />
              
              
          
            <img  className="family-png"src="src/assets/family.png" alt="" />
            <img className='travel-img'  src="src/assets/travel.png" alt="" />
            <img className='invest-img'  src="src/assets/invest.png" alt="" />
            
            </div>
          </main>
          <footer className=' shrujan' >
         <button className='trynow-btn'>Try NOW <img src="src/assets/top-right.png" ></img></button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Futuresection;

