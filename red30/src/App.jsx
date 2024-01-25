import AuthDetails from "./components/auth/AuthDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Header from "./components/Header";
import Fuitmand from "./imgs/fruithartje.webp"

function App() {
  return (
    <div className="App">
    <Header />
    <div className="welcome-section">
      <h1>
        Welkom bij <span className="red-word">Red</span>30
      </h1>
      <p className="motto-text">Our motto is Love your body and it will love you back</p>
      <button className="get-started-button">Get Started Today</button>
    </div>
    <div className="fruitmanddoos">
    <img src={Fuitmand} alt="Fruitmand" className="fruit-image" />
    </div>
  </div>
);
};


export default App;
