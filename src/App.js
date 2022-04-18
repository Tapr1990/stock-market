
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './componets/Create';
import Home from './componets/Home';
import Navbar from './componets/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          
        </Routes>
      </div>
  
    </BrowserRouter>
  );
}

export default App;
