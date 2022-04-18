
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './componets/Create';
import Home from './componets/Home';
import Navbar from './componets/Navbar';

function App() {

  const [stocks, setStocks] = useState([]);

  useEffect( () => {
    fetch("https://justivo.com/stockws.php?get")
    .then( response => response.json())
    .then( data => setStocks(data));

  },[]);


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home stocks={stocks}/>} />
          <Route path="/create" element={<Create />} />
          
        </Routes>
      </div>
  
    </BrowserRouter>
  );
}

export default App;
