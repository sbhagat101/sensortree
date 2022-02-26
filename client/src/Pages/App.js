
import '../App.css';
import Register from "./Register";
import Login from "./Login";
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard/>} />
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;