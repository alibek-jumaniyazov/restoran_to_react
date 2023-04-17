import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Pizza from "./pages/Pizza";
import Zakaz from "./pages/Zakaz";
import { useState } from "react";

function App() {
  const [zakaz , setZakaz] = useState(  JSON.parse(localStorage.getItem('zakaz')) || [])

localStorage.setItem('zakaz', JSON.stringify(zakaz))

  function addZakazProduct(id, img, name,info,sm,price,){
      setZakaz(value => [...value, {
          id: id,
          img: img,
          name: name,
          info: info,
          sm: sm,
          price: price,
        }])
  }
  
  console.log(zakaz);

  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Home addZakazProduct={addZakazProduct}/>} />
      </Routes>
      <div className="container">
        <Routes>
          <Route  path="/pizza" element={<Pizza addZakazProduct={addZakazProduct}/>} />
          <Route  path="/zakaz" element={<Zakaz zakaz={zakaz} />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
