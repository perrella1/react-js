import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import NewPost from "./routes/NewPost";
import Admin from "./routes/Admin";


function App() {

  
  return (

    <Router>
    <div className="App">

    <Navbar />

    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

    

      </div>

    </Router>
  )
}

export default App
