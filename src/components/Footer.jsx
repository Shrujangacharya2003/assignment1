import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="footmain">
      <div className="main">
      <div className="footer-content">
           <a id="footer-home" href="/">  <li>Home</li></a><br />
           <a  id='footer-home' href="/about"><li>About </li> </a><br />
        <li> Our Team </li>
        </div>
        <div className="footer-content2">
          <li>Research </li><br />
          <li>AI Platform</li><br />
          <li>Webinar</li>
          </div>
          </div>
          <div className="social-icons">
            <li>Social </li>
            <br />
            <li>Join Us</li>
            <div className="social-images">
            <img src="src/assets/youtube.png" alt="yt" />
            <img src="src/assets/facebook.png" alt="fb" />
            <img src="src/assets/twitter.png" alt="twt" />
            <img src="src/assets/instagram.png" alt="ig" />
            <img src="src/assets/linkedin.png" alt="in" />
            </div>
          </div>
          </div>
      
       
       
      <hr />
    </footer>
  );
};

export default Footer;




