import profilepicture from "./images/profile-picture.jpg"
import mail from "./Icons/mail-icon.svg"
import linkedin from "./Icons/linkedin-icon.svg"
import gb from "./Icons/gb-icon.svg"
import insta from "./Icons/insta-icon.svg"
import fb from "./Icons/fb-icon.svg"
import twitter from "./Icons/twitter-icon.svg"
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className="App-card">
        <img className='card-img' src={profilepicture} alt="Laura Smith pic" />
        <div className="card-inner-container">
          <h2 className='card-name' >Saad Ahmad</h2>
          <p className="name-role">frontend developer</p>
          <p className="name-mail">saad.solves@gmail.com</p>
          <div className="buttons-container">
            <a className="button btn-white" href="mailto:saad.solves@gmail.com" target="_blank" rel="noreferrer">
              <img src={mail}  alt="mailto"/>
              Email
            </a>
            <a className="button btn-blue" href="https://www.linkedin.com/in/saadsolves/" target="_blank" rel="noreferrer">
              <img src={linkedin}  alt="linkedin"/>
              LinkedIn
            </a>
          </div>
          <div>
            <h4 className="card-detail-head">About</h4>
            <p className="card-des">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          </div>
          <div>
            <h4 className="card-detail-head">Interest</h4>
            <p className="card-des">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          </div>
        </div>
        <div className="social-container">
          <a href="https://twitter.com/iamsaad640" target="_blank" rel="noreferrer"><img alt="" src={twitter} /></a>
          <a href="https://www.facebook.com/saadsolves" target="_blank" rel="noreferrer"><img alt="" src={fb} /></a>
          <a href="https://www.instagram.com/xaaddev/" target="_blank" rel="noreferrer"><img alt="" src={insta} /></a>
          <a href="https://www.github.com/iamsaad640/" target="_blank" rel="noreferrer"><img alt="" src={gb} /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
