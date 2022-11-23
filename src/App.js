import profilepicture from "./images/profile-picture.jpg"
import './App.css';
import About from "./Components/About"
import Interest from "./Components/Interest"
import ProfileInfo from "./Components/ProfileInfo"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className='App'>
      <div className="App-card">
        <img className='card-img' src={profilepicture} alt="Laura Smith pic" />
        <div className="card-inner-container">
          <ProfileInfo />
          <About />
          <Interest />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
