
import '../App.css';
import Register from "./Register";
import Login from "./Login";
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/Home" element={<Home/>} />
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;