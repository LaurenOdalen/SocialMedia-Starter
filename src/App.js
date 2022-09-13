import "./App.css"
import Home from './pages/home/Home.jsx'
import ProfileSide from "./Components/profileSide/ProfileSide";


function App() {
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        <ProfileSide></ProfileSide>
        <Home></Home>
    </div>
  );
}

export default App;
