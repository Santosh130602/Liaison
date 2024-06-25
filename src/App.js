
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
// import Login from './Pages/Login';
// import Signup from './Pages/Signup';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/contact" element= {<Contact/>} />
        {/* <Route path="/login" element= {<Login/>} />
        <Route path="/signup" element={<Signup/>} /> */}
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
