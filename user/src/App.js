import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Body from './components/Body';
import FeedbackStories from "./components/FeedbackStories";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Features from "./components/Feature";
import SignLangHero from "./components/SignLangHero";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={
            <>
              <Banner />
              <br></br>
              <br></br>
              <Body />
              <br></br>
              <br></br>
              <br></br>
              <div id="body-section">
                <Features/>
              </div>
              <SignLangHero />
              <div id="blogs-section">
                <FeedbackStories />
              </div>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;