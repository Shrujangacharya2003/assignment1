import React from 'react';

function Futuresection() {
  return (
    <>
      <div className='finalcontainer'>
        <div className="container">
          <header className='C-header'>
            <h1>Focus on What – Truly Matters</h1>
            <p>
              Let <span className="highlight">InvestVidhi</span> handle your <span className="highlight">finances</span> while you focus on what <span className="highlight">truly matters</span>. Seamlessly <span className="highlight">grow your wealth</span> with us.
            </p>
          </header>
          <main>
            <div className="image-set">
              <img className='imageset-img' src="src/assets/Secfurure.1[1].png" alt="" />
            </div>
            <div className="banner">
              <img className="icon-banner" src="src/assets/bargragh.png" alt="Bar Chart" />
              <span className="text-banner"><span className="highlight-banner">More Time to Upskill</span>: Invest in yourself</span>
              <img className="arrow" src="src/assets/grow-up.png" alt="Up Arrow" />
            </div>
            <div className="banner-family">
              <img className="icon-family" src="src/assets/home-icon.png" alt="Bar Chart" />
              <span className="text-family"><span className="highlight-family">Spend More Time with Family</span>: Prioritize what matters</span>
              <img className="arrow-family" src="src/assets/grow-up.png" alt="Up Arrow" />
            </div>
            <div className="banner-vacation">
              <img className="icon-vacation" src="src/assets/flight.png" alt="Bar Chart" />
              <span className="text-vacation"><span className="highlight-vacation">Achieve Your Dream Vacation</span>: Make it a reality</span>
              <img className="arrow-vacation" src="src/assets/grow-up.png" alt="Up Arrow" />
            </div>
          </main>
          <footer className='shrujan'>
            <button className='trynow-btn'>Try NOW <img src="src/assets/top-right.png" alt="Top Right Arrow" /></button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Futuresection;
